import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../backend/firebase";
import { doc, getDoc } from "firebase/firestore";
import type { User } from "firebase/auth";


//create custom user type
type AppUser = {
  uid: string;
  email: string | null;
  name?: string;
  role?: string;
};

//add message, setMessage properties for global msg display
type AuthContextType = {

  user: AppUser | null; //access custom type here
  loading: boolean;
  message: string;
  setMessage: (msg: string) => void;

};


export const AuthContext = createContext<AuthContextType> ({
    user: null,
    loading: true,
    message: "",
    setMessage: () => {},

});


export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<User | null>(null);
  
  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("");

  //verify user before redirect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      
        if (currentUser) {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            
            const data = docSnap.data();

            setUser({
              //...currentUser,
              //...docSnap.data(),
              uid: currentUser.uid,
              email: currentUser.email,
              name: data.name,
              role: data.role,

            } as any);
          }
          else {
            setUser(currentUser);
          }
        }
        else {
          setUser(null);
        }

        //setUser(currentUser);
        
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, message, setMessage }}>
      {children}
    </AuthContext.Provider>
  );
};
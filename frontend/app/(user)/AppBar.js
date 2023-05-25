"use client";
import Link from "next/link";
import {useSession, signOut} from 'next-auth/react';

import FaceIcon from '@mui/icons-material/Face';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import Button from '@mui/material/Button';

const AppBar = () => {
  
  const {data} =useSession();

  return (
    <ul className="bg-gradient-to-b from-white to-cyan-50 shadow px-1 py-2 flex text-cyan-500 gap-3  ">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/products"}>Liste des produits</Link>
      </li>
      {data ? ( <li>
              <span style={{ marginRight: "15px",color :"orange" }}>USER : {data?.user?.user?.email}</span>
              {" "}
             <Button color="inherit" onClick={() => {signOut();}}><ExitToAppRoundedIcon style={{ color: 'gray' }}/> Logout </Button>
            </li>
            ): <Button color="inherit" onClick={() => router.push('/login')}><FaceIcon style={{ color: 'green' }}/> Login </Button>
            }
    </ul>
  );
};

export default AppBar;

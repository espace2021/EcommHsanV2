"use client"
import Image from "next/image";
import Link from "next/link";
import axios from 'axios'
import { useRouter } from "next/navigation";
import NewCategorie from "./NewCategorie";
const Listcategories = ({categories}) => {


  const router = useRouter();

  //suppression

 


  return (
    <>
    
    <NewCategorie />
           
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold">
        {categories?.length} 
      </h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Nom categorie
            </th>
            
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((cat) => (
            <tr className="bg-white">
                <td className="px-6 py-2">
                <Image
              src={
                cat?.imagecategorie
                  ? cat?.imagecategorie
                  : "/images/default_product.png"
              }
              alt="categorie nanme"
              height="50"
              width="50"
            />

                </td>

              <td className="px-6 py-2"> {cat?.nomcategorie.substring(0,20)}...</td>
              
              <td className="px-6 py-2">
                <div>                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    </>
  )
}

export default Listcategories


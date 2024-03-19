'use client'
import Link from 'next/link'
import {
  RiLinkedinFill,
  RiGithubFill,
} from 'react-icons/ri'

const icons = [
  {
    path:'/',
    name : <RiLinkedinFill/>
  },
  {
    path:'/',
    name : <RiGithubFill/>
  }

]
const Social = ( {contianerStyles ,iconStyles}) => {
  return (
    <div className = {`${contianerStyles}`}>
      {
        icons.map((icon ,index)=>{
          return (
            <Link href={icon.path} key ={index}>
              <div className = {`${iconStyles}`}>
                {icon.name}
              </div>
            </Link>
          );
        })
      }
    </div>
  )
}

export default Social
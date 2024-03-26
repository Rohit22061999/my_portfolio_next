'use client'
import Link from 'next/link'
import {Button} from './ui/button'

//import swiper styles

import 'swiper/css';
import 'swiper/css/pagination'

// import required modules
import {Pagination} from 'swiper/modules';


//components
import ProjectCard from  '@/components/ProjectCard'

const projectData = [
    {
        image:'/work/3.png',
        category:'react js',
        name:'Nexa website',
        description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ab, eligendi dolor at repellat fugit libero aut quam accusantium natus, perferendis, voluptatem placeat maxime maiores beatae! Voluptates soluta reprehenderit deserunt.',
        link:'/',
        github:'/'

    },
    {
        image:'/work/2.png',
        category:'next js',
        name:'Nexa website',
        description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ab, eligendi dolor at repellat fugit libero aut quam accusantium natus, perferendis, voluptatem placeat maxime maiores beatae! Voluptates soluta reprehenderit deserunt.',
        link:'/',
        github:'/'

    }
]

const Work = () => {
  return (
    <section>
        <div className = 'container  mx-auto'>
            {/* text */}
            <div>
                <h2 className='section-title mb-4'>Latest Projects</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius porro labore veniam temporibus dolorem mollitia non illo consectetur a debitis sapiente, blanditiis cum natus ea, quae et repellat tempora! Quae!</p>
                <Link href='/projects'><Button>All Projects</Button></Link>
            </div>
        </div>
    </section>
  )
}

export default Work
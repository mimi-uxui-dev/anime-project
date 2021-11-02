import { useEffect } from 'react'
import animeService from "../../services/animeService"

interface IHomePageProps { }

function HomePage(props: IHomePageProps) {

     const fetchAnimePage = async () => {
          const animePage = await animeService.getAnimePage(0).catch(err => {
               console.log('Error:', err)
          })

          console.log('Anime page', animePage)
     }

     useEffect(() => {
          fetchAnimePage()
     }, [])

     return (
          <div>
               <h1>Anime List</h1>
          </div>
     )
}

export default HomePage

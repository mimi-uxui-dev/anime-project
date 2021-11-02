import { useEffect } from 'react'
import { Dispatch } from 'redux'
import animeService from "../../services/animeService"
import { GetAnimePage } from './../../services/animeService/__generated__/GetAnimePage';
import { setAnimePage } from './HomePageSlice';
import { useAppDispatch } from './../../hooks';

interface IHomePageProps { }

const actionDispatch = (dispatch: Dispatch) => ({
     setAnimePage: (page: GetAnimePage['Page']) => dispatch(setAnimePage(page))
})

function HomePage(props: IHomePageProps) {
     const { setAnimePage } = actionDispatch(useAppDispatch())
     const fetchAnimePage = async () => {
          const animePage = await animeService.getAnimePage(0).catch(err => {
               console.log('Error:', err)
          })
          if (animePage) setAnimePage(animePage)
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

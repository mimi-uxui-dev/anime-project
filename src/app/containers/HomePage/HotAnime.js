import { createSelector } from 'reselect';
import { useAppSelector } from '../../hooks';
import { makeSelectAnimePage } from './selecors';
import { GetAnimePage } from './../../services/animeService/__generated__/GetAnimePage';

const stateSelector = createSelector(makeSelectAnimePage, (anime) => ({ animePage }))

function HotAnime() {
     const { animePage } = useAppSelector(stateSelector)

     const isEmptyAnimePage = !animePage || !animePage.media || !animePage.media.length === 0

     if (!isEmptyAnimePage)
          return <h1>Null</h1>

     return (
          <div>
               {
                    /*  animePage.media.map(a => ) */
               }
          </div>
     )
}

export default HotAnime
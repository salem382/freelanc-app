import './SubjectCobtrols.scss';
import { t } from 'i18next';
import {nextBtn} from '../../../store/unitsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SubjectControls = () => {

   const {noNext, activeVideo} = useSelector(state => state.units);

  const dispatch =  useDispatch();

  return (
    <div className='subject-controls'>
      <div className='leason-header'>
        {/* <h2 className='lesson-title'>Conditionals</h2> */}
        <div className='leason-rate'>
          {/* <span>rate the leason</span> */}
        </div>
      </div>
      <div className='lesson-actions'>
        <button className='prev'>{t("video-controls-previous")}</button>
        <button className='pdf'>{t("video-controls-pdf")}</button>

        <Link to={`/test/${activeVideo.id}`} className='nav-link'>
            <button className='start'>{t("video-controls-start")}</button>
        </Link>

        <button className={noNext ?"next stop-click" : 'next'} style={{ pointerEvents : noNext && "none",background:noNext? "#ccc" : "15be4f"}} onClick={() => dispatch(nextBtn())} >{t("video-controls-next")}</button>
       
      </div>
    </div>
  );
};

export default SubjectControls;

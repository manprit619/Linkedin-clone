import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

const newsArticle = (heading, subtitle) => (

 <div className="widgets_article">
 <div className="widgets_articleLeft">
     <FiberManualRecordIcon/>
 </div>

<div className="widgets_articleRight">
<h4>{heading}</h4>
<p>{subtitle}</p>

</div>

 </div>
);


    return (
        <div className="widgets">

            <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>

            </div>

            {newsArticle("Manprit is back", "Top news -9099 readers")}
            {newsArticle("Coronovirus: Germany updates", "Top news -164 readers")}
            {newsArticle("Tesla", "Cars and auto-90 readers")}
            {newsArticle("Is Redux too good", "Code -91 readers")}
            {newsArticle("Bitcoin breaks $29k", "Top news -5000 readers")}


            
        </div>

    )
}

export default Widgets

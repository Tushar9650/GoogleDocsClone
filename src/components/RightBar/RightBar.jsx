import React from 'react'
import './RightBar.css'
function RightBar() {
  // sidebar which contains Icons of other google services
  return (
    <div className='rightbar-box'>
      <button className='rightbar-image-btn'>
        <img
          src="https://lh3.googleusercontent.com/ogw/AOLn63G7txVtlrYdE_j33ioR1g8L8_JlGK2DxH0I64E=s64-c-mo"
          className='rightbar-image'
          alt="" />
      </button>

      <a href='https://calendar.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://keep.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://tasks.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://contacts.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://maps.google.com/' className='rightbar-app-icon'>
        <img
          src="https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png"
          width={20} height={20} alt="" />
      </a>

      <i className="fa fa-plus rightbar-action-icon"></i>
      <i className="fa fa-angle-right rightbar-action-icon"></i>
    </div>
  )
}

export default RightBar
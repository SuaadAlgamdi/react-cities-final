import video from "../pages/video.mp4"

function Video() {
  return (
    <>
      <video className={Styles.video} src={video} />
    </>
  )
}

export default Video

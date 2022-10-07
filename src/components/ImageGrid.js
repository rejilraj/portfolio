import '../Style/ImageGrid.css';

const Media = ({ media }) => {
  const isVideo = media.includes('videos');
  return (
    <>
      {isVideo ? (
        <video src={media} autoPlay={true} loop muted />
      ) : (
        <img src={media} loading="lazy" alt="" />
      )}
    </>
  );
};

const ImageGrid = ({ images = [] }) => {
  return (
    <figure className="image-grid">
      {images.map((media, index) => (
        <div key={index} className={`image-grid-${index}`}>
          <Media media={media} />
        </div>
      ))}
    </figure>
  );
};

export default ImageGrid;

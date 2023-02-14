import './card.css';

const containerCover = (prop) => {
  const cover = `container-cover ${prop.className}`;
  return <div className={cover}>{prop.children}</div>;
};
export default containerCover;

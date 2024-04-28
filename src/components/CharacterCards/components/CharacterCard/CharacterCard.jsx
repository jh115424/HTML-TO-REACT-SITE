const CharacterCard = ({ card }) => {
  const { name, nickName, imageUrl, background } = card;
  return (
    <div className="card">
      <div className="card-titles">
        {name && <h3>{name}</h3>}
        {nickName && <h4>{nickName}</h4>}
     
      </div>
      <img src={imageUrl} alt={name} />
      {background && <p>{background}</p>}
    </div>

    
  );
};
export default CharacterCard;


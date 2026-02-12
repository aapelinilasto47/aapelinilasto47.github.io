function navBlock({ navItem, onClick}) {
  return (
    <div onClick={onClick} className="nav-block">
      <h2>{navItem.label}</h2>
    </div>
  );
}

export default navBlock;
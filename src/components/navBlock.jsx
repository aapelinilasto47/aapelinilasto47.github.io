function navBlock({ navItem, onClick}) {
  return (
    <div onClick={onClick} className="nav-block" style={{ backgroundColor: navItem.color1, borderColor: navItem.color2 }}>
      <h2>{navItem.label}</h2>
    </div>
  );
}

export default navBlock;
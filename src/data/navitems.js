class NavItem {
  constructor(id, label, targetState, color1, color2) {
    this.id = id;
    this.label = label;
    this.targetState = targetState;
    this.color1 = color1;
    this.color2 = color2;
  }
}

export const navItems = [
  new NavItem(1, 'Projects', 'projects', '#ff0000', '#00ff00'),
  new NavItem(2, 'Work', 'work', '#0000ff', '#ffff00'),
  new NavItem(3, 'Contact', 'contact', '#00ffff', '#ff00ff'),
  new NavItem(4, 'Courses', 'courses', '#ffffff', '#000000')
]

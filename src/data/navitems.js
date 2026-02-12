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
  new NavItem(1, 'Projects', 'projects', '#db62c7', '#ea00ff'),
  new NavItem(2, 'Work', 'work', '#e7a75d', '#ff8800'),
  new NavItem(3, 'Contact', 'contact', '#5ee7e0', '#00fff2'),
  new NavItem(4, 'Courses', 'courses', '#657af0', '#1900ff')
]

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
  new NavItem(1, 'Projects', 'projects', '#c030a8', '#ea00ff'),
  new NavItem(2, 'Work', 'work', '#c77c26', '#ff8800'),
  new NavItem(3, 'Contact', 'contact', '#2bbbb4', '#00fff2'),
  new NavItem(4, 'Courses', 'courses', '#3128af', '#1900ff')
]

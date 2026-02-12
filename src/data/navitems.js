class NavItem {
  constructor(id, label, targetState) {
    this.id = id;
    this.label = label;
    this.targetState = targetState;
  }
}

export const navItems = [
  new NavItem(1, 'Projects', 'projects'),
  new NavItem(2, 'Work', 'work'),
  new NavItem(3, 'Contact', 'contact'),
  new NavItem(4, 'Courses', 'courses')
]

export const store = {
    state: {
        activeTopLevel: null,
        icon: null,
        rotateIcon: false
    },
    setIcon(value) {
        this.state.icon = value;
    },
    setRotate(value) {
        this.state.rotateIcon = value;
    },
    setActiveTopLevel(id) {
        this.state.activeTopLevel = id != this.state.activeTopLevel ? id : null;
    }
}
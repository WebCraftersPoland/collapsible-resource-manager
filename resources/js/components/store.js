export const store = {
    state: {
        activeTopLevel: null
    },
    setActiveTopLevel(id) {
        this.state.activeTopLevel = id != this.state.activeTopLevel ? id : null;
    }
}
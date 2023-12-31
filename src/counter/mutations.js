
export const increment = ( state ) => {
    state.count++
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, val ) => {
    state.count += val
    state.lastMutation = 'incrementBy'
}

export const setLoading = (state, val) => {
    state.isLoading= val
    state.lastMutation = 'setLoading'
}

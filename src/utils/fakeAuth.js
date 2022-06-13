const fakeAuth = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('a1s2d3f4'), 250)
    })
}

export default fakeAuth
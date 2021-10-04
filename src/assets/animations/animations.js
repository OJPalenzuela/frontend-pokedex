

export const animations = {
    auth: {
        pageTransitions: {
            duration: 0.2,
        },

        login: {
            pageVariants: {
                initial: {
                    opacity: 0,
                    x: "100vh",
                },
                in: {
                    opacity: 1,
                    x: 0,
                },
                out: {
                    opacity: 0,
                    x: "-100vh",
                }
            }
        },
        register: {
            pageVariants: {
                initial: {
                    opacity: 0,
                    x: "-100vh",
                },
                in: {
                    opacity: 1,
                    x: 0,
                },
                out: {
                    opacity: 0,
                    x: "100vh",
                }
            }
        },

    },
    main: {
        pageVariants: {
            initial: {
                opacity: 1,
                y: "-100vh",
            },
            in: {
                opacity: 1,
                y: 0,
            },
            out: {
                opacity: 0,
                y: "100vh",
            }
        },
        pageTransitions: {
            duration: 0.5,
        }
    },
    info: {
        pageVariants: {
            initial: {
                opacity: 1,
                y: "-100vh",
            },
            in: {
                opacity: 1,
                y: 0,
            },
            out: {
                opacity: 0,
                y: "100vh",
            }
        },
        pageTransitions: {
            duration: 0.5,
        }
    }
}

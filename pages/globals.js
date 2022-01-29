export const _Animation_PageTransition = {
    initial: {
        x: 20,
        opacity: 0,
        transition: {
            ease: [0.1, 0.7, 0.25, 1],
            duration: 0.2
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease: [0.5, 0, 0.45, 1],
            duration: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [0.5, 0, 0.45, 1],
            duration: 0.2
        }
    }
}

export const _Animation_TabTransition = {
    initial: {
        y: 20,
        opacity: 0,
        transition: {
            ease: [0.1, 0.7, 0.25, 1],
            duration: 0.2
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.5, 0, 0.45, 1],
            duration: 0.2,
            staggerChildren: 0.07
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [0.5, 0, 0.45, 1],
            duration: 0.2
        }
    }
}

export const _Animation_SideMenu = {
    initial: {
        opacity: 0,
        scale: 0.8,
        originX: 0,
        originY: 0,
        transition: {
            ease: [0.06, 0.77, 0, 0.99],
            duration: 0.2
        }
    },
    open: {
        opacity: 1,
        scale: 1,
        originX: 0,
        originY: 0,
        transition: {
            ease: [0.06, 0.77, 0, 0.99],
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [0.76, 0.25, 0.21, 0.71],
            duration: 0.2
        }
    }
}

export const _Animation_BottomMenu = {
    initial: {
        opacity: 0,
        y: '30%',
        transition: {
            ease: [0.1, 0.7, 0.25, 1],
            duration: 0.2
        }
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.5, 0, 0.45, 1],
            duration: 0.2
        }
    },
    exit: {
        opacity: 0,
        y: '30%',
        transition: {
            ease: [0.5, 0, 0.45, 1],
            duration: 0.2
        }
    }
}
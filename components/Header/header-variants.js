export const titleVariants = {
    start:{
        opacity: 0,
        x:"-100%",
    },
    end:{
        opacity:1,
        x:0,
        transition:{
          duration:1.5
        }
    }
}

export const subtitleVariants = {
    start:{
        opacity: 0,
        x:"100%",
    },
    end:{
        opacity:1,
        x:0,
        transition:{
            delay:.5,
            duration:1.5
        }
    }
}
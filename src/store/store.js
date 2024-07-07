import { configureStore, createSlice } from "@reduxjs/toolkit";

const powerinitialstate = [    
    {
        icon:'fa-solid fa-globe',
        heading:'Insight Broadening',
        desc:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
    },
    {
        icon:'fa-solid fa-hand-holding-dollar',
        heading:'Wealth',
        desc:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
    },
    {
        icon:'fa-solid fa-heart-pulse',
        heading:'Health Improvement',
        desc:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
    },
    {
        icon:'fa-solid fa-user-clock',
        heading:'Insight Broadening',
        desc:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
    },
];

const facilitiesinitialstate = [
    {
        id:1,
        name:"High Capacity Conference Halls",
        image:'/images/facilities/w-overlay/hall.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:2,
        name:"Library With 1M Books",
        image:'/images/facilities/w-overlay/books.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:3,
        name:"Equiped Labs",
        image:'/images/facilities/w-overlay/labs.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:4,
        name:"24/7 opened study hall",
        image:'/images/facilities/w-overlay/study-hall.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:5,
        name:"24/7 Internet Access",
        image:'/images/facilities/w-overlay/internet.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:6,
        name:"Dormitories",
        image:'/images/facilities/w-overlay/dormitories.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:7,
        name:"Convenient Dormitories",
        image:'/images/facilities/w-overlay/convenient-doormitories.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:8,
        name:"High Capacity Conference Halls",
        image:'/images/facilities/w-overlay/hall.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:9,
        name:"High Capacity Conference Halls",
        image:'/images/facilities/w-overlay/hall.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    },
    {
        id:10,
        name:"High Capacity Conference Halls",
        image:'/images/facilities/w-overlay/hall.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus libero ut augue vehicula imperdiet. Integer vitae porttitor sapien, at posuere justo. Vestibulum imperdiet lobortis interdum.'
    }
]
 
const powerslice = createSlice({
    name:'powersliceinfo',
    initialState:{powers:powerinitialstate},
    reducers:function getpowers(state){
        return state;
    }
});

const fieldsinitialstate = [
    {
        image:'/images/fields/1.jpg',
        heading:'Programming',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non pellentesque arcu. In vehicula sem in leo aliquam, eu mattis purus suscipit. Fusce non quam eu tellus eleifend maximus.'
    },
    {
        image:'/images/fields/2.jpg',
        heading:'Mathematics',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non pellentesque arcu. In vehicula sem in leo aliquam, eu mattis purus suscipit. Fusce non quam eu tellus eleifend maximus.'
    },
    {
        image:'/images/fields/3.jpg',
        heading:'Physics',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non pellentesque arcu. In vehicula sem in leo aliquam, eu mattis purus suscipit. Fusce non quam eu tellus eleifend maximus.'
    },
    {
        image:'/images/fields/4.jpg',
        heading:'Chemistry',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non pellentesque arcu. In vehicula sem in leo aliquam, eu mattis purus suscipit. Fusce non quam eu tellus eleifend maximus.'
    },
    {
        image:'/images/fields/5.jpg',
        heading:'Biology',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non pellentesque arcu. In vehicula sem in leo aliquam, eu mattis purus suscipit. Fusce non quam eu tellus eleifend maximus.'
    },
    {
        image:'/images/fields/6.jpg',
        heading:'Art',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non pellentesque arcu. In vehicula sem in leo aliquam, eu mattis purus suscipit. Fusce non quam eu tellus eleifend maximus.'
    },
]

const fieldslice = createSlice({
    name:'fieldsliceinfo',
    initialState:{fields:fieldsinitialstate},
    reducers:function getfields(state){
        return state;
    },
});

const facilitiesslice = createSlice({
    name:'facilitiessliceinfo',
    initialState:{facilities:facilitiesinitialstate},
    reducers:function getfacilities(state){
        return state;
    }
})


export const ourstore = configureStore({
    reducer:{
        powerreducer:powerslice.reducer,
        fieldreducer:fieldslice.reducer,
        facilityreducer:facilitiesslice.reducer,
    },
})

//export const poweractions = powerslice.actions;
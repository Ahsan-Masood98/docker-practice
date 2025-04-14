console.log("Hello Docker!");

// Docker => images and containers 
//     Images -> Teplate/Blueprints for containers
//     Containers -> The running if unit software
//     Images -> Contains code + required tools/runtime
//     Containers -> Runs/Executres the image code
//     Images -> Shareable packages
//     Containers -> Shared packacge run in containers

// Containers contains or runs images of your projects containing the all the setupp in it that is necessary to run the project on any system

// Creating an Image
//     1. Use existing, pre-built image created or shared by someone e.g: like from Docker Hub.
//         to use an image from docker hub we use in our desired folder it will download latest image from docker hub
//             -- docker run node 
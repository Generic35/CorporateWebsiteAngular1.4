(function(){
    'use strict'
    
    angular.module('SitecoreReferenceApp').factory('dummyData', dummyData);
    
    function dummyData(){
        return {
            recentWorks : 
            [
                {
                    "id": 1,
                    "title": "Business theme",
                    "imageUrlSmall": "/images/portfolio/recent/item1.png",
                    "imageUrlLarge": "/images/portfolio/full/item1.png",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
                },
                {
                    "id": 2,
                    "title": "Business theme",
                    "imageUrlSmall": "/images/portfolio/recent/item2.png",
                    "imageUrlLarge": "/images/portfolio/full/item2.png",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
                },
                {
                    "id": 3,
                    "title": "Business theme",
                    "imageUrlSmall": "/images/portfolio/recent/item3.png",
                    "imageUrlLarge": "/images/portfolio/full/item3.png",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
                },
                {
                    "id": 4,
                    "title": "Business theme",
                    "imageUrlSmall": "/images/portfolio/recent/item4.png",
                    "imageUrlLarge": "/images/portfolio/full/item4.png",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
                },
                {
                    "id": 5,
                    "title": "Business theme",
                    "imageUrlSmall": "/images/portfolio/recent/item5.png",
                    "imageUrlLarge": "/images/portfolio/full/item5.png",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
                },
                {
                    "id": 6,
                    "title": "Business theme",
                    "imageUrlSmall": "/images/portfolio/recent/item6.png",
                    "imageUrlLarge": "/images/portfolio/full/item6.png",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
                },
                {
                    "id": 7,
                    "title": "Business theme",
                    "imageUrlSmall": "/images/portfolio/recent/item7.png",
                    "imageUrlLarge": "/images/portfolio/full/item7.png",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
                },
                {
                    "id": 8,
                    "title": "Business theme",
                    "imageUrlSmall": "/images/portfolio/recent/item8.png",
                    "imageUrlLarge": "/images/portfolio/full/item8.png",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
                }
            ],
            
            services : 
            [
                {
                    "id": 1,
                    "title": "Fresh and Clean",
                    "icon": "bullhorn",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                },
                {
                    "id": 2,
                    "title": "Retina ready",
                    "icon": "comments",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                },
                {
                    "id": 3,
                    "title": "Easy to customize",
                    "icon": "cloud-download",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                },
                {
                    "id": 4,
                    "title": "Adipisicing elit",
                    "icon": "leaf",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                },
                {
                    "id": 5,
                    "title": "Sed do eiusmod",
                    "icon": "cogs",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                },
                {
                    "id": 6,
                    "title": "Labore et dolore",
                    "icon": "heart",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                }
            ],
            
            clientComments : 
            [
                {
                    "id" : 1,
                    "name": "John Doe",
                    "role": "Director of corlate.com",
                    "imageUrl": "/images/client1.png",
                    "comment": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
                },
                {
                    "id": 2,
                    "name": "John Doe",
                    "role": "Director of corlate.com",
                    "imageUrl": "/images/client2.png",
                    "comment": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
                },
                {
                    "id": 3,
                    "name": "John Doe",
                    "role": "Director of corlate.com",
                    "imageUrl": "/images/client3.png",
                    "comment": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
                }
            ],
            
            locations : [
            {
                "id": 1,
                "title": "Head Office",
                "street": "1537 Flint Street",
                "city": "Tumon",
                "state": "MP",
                "zip": "96951",
                "phone": "670-898-2847",
                "email": "info@domain.com"
            },
            {
                "id": 2,
                "title": "Zonal Office",
                "street": "1537 Flint Street",
                "city": "Tumon",
                "state": "MP",
                "zip": "96951",
                "phone": "670-898-2847",
                "email": "info@domain.com"
            },
            {
                "id": 3,
                "title": "Zone#2 Office",
                "street": "1537 Flint Street",
                "city": "Tumon",
                "state": "MP",
                "zip": "96951",
                "phone": "670-898-2847",
                "email": "info@domain.com"
            },
            {
                "id": 4,
                "title": "Zone#3 Office",
                "street": "1537 Flint Street",
                "city": "Tumon",
                "state": "MP",
                "zip": "96951",
                "phone": "670-898-2847",
                "email": "info@domain.com"
            }
            ],
            
            teamMemberProfiles: 
            [
            {
                "id": 1,
                "name": "John Doe",
                "role": "Director of corlate.com",
                "imageUrl": "/images/man1.jpg",
                "skills": [
                { "name": "Web" },
                { "name": "Ui" },
                { "name": "Ux" },
                { "name": "Photoshop" }
                ],
                "facebookProfileUrl": "#",
                "twitterProfileUrl": "#",
                "googlePlusProfileUrl": "#",
                "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            },
            {
                "id": 2,
                "name": "John Doe",
                "role": "Director of corlate.com",
                "imageUrl": "/images/man2.jpg",
                "skills": [
                { "name": "Web" },
                { "name": "Ui" },
                { "name": "Ux" },
                { "name": "Photoshop" }
                ],
                "facebookProfileUrl": "#",
                "twitterProfileUrl": "#",
                "googlePlusProfileUrl": "#",
                "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            },
            {
                "id": 3,
                "name": "John Doe",
                "role": "Director of corlate.com",
                "imageUrl": "/images/man3.jpg",
                "skills": [
                { "name": "Web" },
                { "name": "Ui" },
                { "name": "Ux" },
                { "name": "Photoshop" }
                ],
                "facebookProfileUrl": "#",
                "twitterProfileUrl": "#",
                "googlePlusProfileUrl": "#",
                "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            },
            {
                "id": 4,
                "name": "John Doe",
                "role": "Director of corlate.com",
                "imageUrl": "/images/man4.jpg",
                "skills": [
                { "name": "Web" },
                { "name": "Ui" },
                { "name": "Ux" },
                { "name": "Photoshop" }
                ],
                "facebookProfileUrl": "#",
                "twitterProfileUrl": "#",
                "googlePlusProfileUrl": "#",
                "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            }
            ]
        }
    }
        
})();
=============== CARS APP ==================
Creator: i.  Olucheye  - https://github.com/andela-oolofinyo
version: 1.0.0



=============== DESCRIPTION ==================
The API is to give a list of different funspots around you if you ever fiund yourself in a situation of being bored. All you need do is, go through the list of the funspots listed, and find the one closest that suits your needs & taste. Get the basic information about the spot, pick your car keys or call a cab, and get there. If in a situation of wanting to have a party with the intent of meeting newfaces, you can use the form to create a new spot, other users of the app will locate you and it gets turned up. Viola!

ALL FOR FREE.



================= SPOTS ====================
i. Get a list of all funspots around.
ii. Update the list of spots by adding a spot of your choice.
iii. Edit a particular spot to the right specification if you any error is seen.


1.  GET LIST OF FUNSPOTS.

GET

RESPONSE:

[
_id: "54b7cd6058862202004b5afa",
Name: "The Game",
Description: "Shopping Mall",
Tags: "Mall, movies, popcorn",
Address: "Shoprite, Ikeja, Lagos",
Rating: 3,
Costs: 2000,
__v: 0,
Phone_Number: 81234567,
Image: "http://s27.postimg.org/z1hdsrzoz/realestate.jpg"
},
{
_id: "54b7cdce58862202004b5afb",
Name: "Nest Bar",
Description: "bar winery with suya",
Tags: "wine , suya, olosho. igbo",
Address: "Ogbomoso",
Rating: 2,
Costs: 19000,
__v: 0,
Phone_Number: 81234567,
Image: "http://www.naijametro.com/wpress/wp-content/uploads/2012/08/lagos_avenues_bar2_Nadim.jpg"
},
]

2.  UPDATE THE LIST OF SPOTS.

POST

PARAMETERS:

  NAME                  TYPE                   DESCRIPTION
  Name                  string                new name of the spot.
  Address               string                Location of the funspot.
  Costs                 string                minimun costs for entry.
  Rating                string                How highly rated is the funspot.
  Tags                  string                popular tags about the spot.
  Image                 string                Image of the place if any.
  Email                 string                contact email if any.
  Website               string                contact website if any.
  working_hours         string                opening and closing time of the spot
  Phone_Number          Number                contact email if any.
  Menu                  string                popular menu of the spot.

  
Example

{
Name: "Akindele's House",
Address: "Plot 57, Oworonshoki",
Description: "Lodging and accommodation aimed at young proffessionals",
Costs: 350000,
Rating: 4,
Tags: "professionals, cars, beautiful women",
__v: 0,
Email: "",
Website: "www.akindele.com",
working_hours: "24Hrs",
Menu: "None",
Phone_Number: 818609332,
Image: "http://s22.postimg.org/8vf8lpvht/IMG_2337.jpg"
}


3.  EDIT A FUNSPOT.

PUT /_id        //The id field is geneated automatically by the database. 

PARAMETERS

  NAME                  TYPE                   DESCRIPTION
  Name                  string                new name of the spot.
  Address               string                Location of the funspot.
  Costs                 string                minimun costs for entry.
  Rating                string                How highly rated is the funspot.
  Tags                  string                popular tags about the spot.
  Image                 string                Image of the place if any.
  Email                 string                contact email if any.
  Website               string                contact website if any.
  working_hours         string                opening and closing time of the spot
  Phone_Number          Number                contact email if any.
  Menu                  string                popular menu of the spot.

Example

{
_id: "54bc023d62cf5a0300f8926e",
Name: "Akindele's House",
Address: "Plot 57, Oworonshoki",
Description: "Lodging and accommodation aimed at young proffessionals",
Costs: 350000,
Rating: 4,
Tags: "professionals, cars, beautiful women",
__v: 0,
Email: "",
Website: "www.akindele.com",
working_hours: "24Hrs",
Menu: "None",
Phone_Number: 818609332,
Image: "http://s22.postimg.org/8vf8lpvht/IMG_2337.jpg"
}



                                COPYRIGHT JANUARY 2015.

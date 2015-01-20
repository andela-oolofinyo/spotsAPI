<p>=============== LEISURE SPOTS BACKEND APP ==================</p>

<p>Creator: Olucheye  - https://github.com/andela-oolofinyo</p>

<p>version: 1.0.0</p>

<p><b>URL:</b> https://spotslocator.herokuapp.com/</p>

<p>=============== DESCRIPTION ==================</p>

<p>The API is to give a list of different funspots around you if you ever fiund yourself in a situation of being bored. All you need do is, go through the list of the funspots listed, and find the one closest that suits your needs &amp; taste. Get the basic information about the spot, pick your car keys or call a cab, and get there. If in a situation of wanting to have a party with the intent of meeting newfaces, you can use the form to create a new spot, other users of the app will locate you and it gets turned up. Viola!</p>

<p><b>ALL FOR FREE.</b></p>

<p>================= LEISURE SPOTS ====================</p>

<p>i. Get a list of all funspots around.</p>

<p>ii. Update the list of spots by adding a spot of your choice.</p>

<p>iii. Edit a particular spot to the right specification if you any error is seen.</p>

<ol>
<li>GET LIST OF FUNSPOTS.</li>
</ol>

<p>GET</p>

<p>RESPONSE:</p>

<p>[
{</p>

<p>_id: "54b7cd6058862202004b5afa",</p>

<p>Name: "The Game",</p>

<p>Description: "Shopping Mall",</p>

<p>Tags: "Mall, movies, popcorn",</p>

<p>Address: "Shoprite, Ikeja, Lagos",</p>

<p>Rating: 3,</p>

<p>Costs: 2000,</p>

<p>__v: 0,</p>

<p>Phone_Number: 81234567,</p>

<p>Image: "http://s27.postimg.org/z1hdsrzoz/realestate.jpg"</p>

<p>},</p>

<p>{</p>

<p>_id: "54b7cdce58862202004b5afb",</p>

<p>Name: "Nest Bar",</p>

<p>Description: "bar winery with suya",</p>

<p>Tags: "wine , suya, olosho. igbo",</p>

<p>Address: "Ogbomoso",</p>

<p>Rating: 2,</p>

<p>Costs: 19000,</p>

<p>__v: 0,</p>

<p>Phone_Number: 81234567,</p>

<p>Image: "http://www.naijametro.com/wpress/wp-content/uploads/2012/08/lagos<em>avenues</em>bar2_Nadim.jpg"</p>

<p>},</p>

<p>]</p>

<ol>
<li>UPDATE THE LIST OF SPOTS.</li>
</ol>

<p>POST</p>

<p>PARAMETERS:</p>

<table>
 <tr><td><b>NAME</b></td>                           <td><b>TYPE</b></td>                          <td><b>DESCRIPTION</b></td></tr>

  <tr><td> Name &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; new name of the spot.</td></tr>

  <tr><td>Address &nbsp;</td>                                    <td>&nbsp;string</td>                                   <td>&nbsp;Location of the funspot.</td></tr>

  <tr><td>Costs  &nbsp;</td>                                     <td>&nbsp;string</td>                                   <td>&nbsp;minimun costs for entry.</td></tr>

  <tr><td>Rating &nbsp;</td>                               <td>&nbsp;string</td>                                   <td>&nbsp;How rated is the funspot.</td></tr>

  <tr><td>Tags &nbsp;</td>                               <td>&nbsp;string</td>                                   <td>&nbsp;popular tags about the spot.</td></tr>

 <tr><td> Image &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; Image of the place if any.</td></tr>

 <tr><td>  Email &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp;contact email if any.</td></tr>

 <tr><td> Website &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; contact website if any.</td></tr>

 <tr><td> working_hours &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; opening and closing hours of the spot.</td></tr>

 <tr><td> Phone_Number &nbsp;</td>                              <td> &nbsp; Number &nbsp;</td>                          <td>&nbsp; contact phone number if any.</td></tr>

<tr><td> Menu &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; signature menu of the spot.</td></tr>
</table>

<p>Example</p>

<p>{</p>

<p>Name: "Akindele's House",</p>

<p>Address: "Plot 57, Oworonshoki",</p>

<p>Description: "Lodging and accommodation aimed at young proffessionals",</p>

<p>Costs: 350000,</p>

<p>Rating: 4,</p>

<p>Tags: "professionals, cars, beautiful women",</p>

<p>__v: 0,</p>

<p>Email: "",</p>

<p>Website: "www.akindele.com",</p>

<p>working_hours: "24Hrs",</p>

<p>Menu: "None",</p>

<p>Phone_Number: 818609332,</p>

<p>Image: "http://s22.postimg.org/8vf8lpvht/IMG_2337.jpg"</p>

<p>}</p>

<ol>
<li>EDIT A FUNSPOT.</li>
</ol>

<p>PUT /_id        //The id field is geneated automatically by the database. </p>

<p>PARAMETERS</p>

<table>
 <tr><td><b>NAME</b></td>                           <td><b>TYPE</b></td>                          <td><b>DESCRIPTION</b></td></tr>

  <tr><td> Name &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; new name of the spot.</td></tr>

  <tr><td>Address &nbsp;</td>                                    <td>&nbsp;string</td>                                   <td>&nbsp;Location of the funspot.</td></tr>

  <tr><td>Costs  &nbsp;</td>                                     <td>&nbsp;string</td>                                   <td>&nbsp;minimun costs for entry.</td></tr>

  <tr><td>Rating &nbsp;</td>                               <td>&nbsp;string</td>                                   <td>&nbsp;How rated is the funspot.</td></tr>

  <tr><td>Tags &nbsp;</td>                               <td>&nbsp;string</td>                                   <td>&nbsp;popular tags about the spot.</td></tr>

 <tr><td> Image &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; Image of the place if any.</td></tr>

 <tr><td>  Email &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp;contact email if any.</td></tr>

 <tr><td> Website &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; contact website if any.</td></tr>

 <tr><td> working_hours &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; opening and closing hours of the spot.</td></tr>

 <tr><td> Phone_Number &nbsp;</td>                              <td> &nbsp; Number &nbsp;</td>                          <td>&nbsp; contact phone number if any.</td></tr>

<tr><td> Menu &nbsp;</td>                              <td> &nbsp; string &nbsp;</td>                          <td>&nbsp; signature menu of the spot.</td></tr>
</table>

<p>Example</p>

<p>{</p>

<p>_id: "54bc023d62cf5a0300f8926e",</p>

<p>Name: "Akindele's House",</p>

<p>Address: "Plot 57, Oworonshoki",</p>

<p>Description: "Lodging and accommodation aimed at young proffessionals",</p>

<p>Costs: 350000,</p>

<p>Rating: 4,</p>

<p>Tags: "professionals, cars, beautiful women",</p>

<p>__v: 0,</p>

<p>Email: "",</p>

<p>Website: "www.akindele.com",</p>

<p>working_hours: "24Hrs",</p>

<p>Menu: "None",</p>

<p>Phone_Number: 818609332,</p>

<p>Image: "http://s22.postimg.org/8vf8lpvht/IMG_2337.jpg"</p>

<p>}</p>

<pre><code>                            COPYRIGHT JANUARY 2015.
</code></pre>



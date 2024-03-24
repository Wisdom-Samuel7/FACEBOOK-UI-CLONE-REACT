import React from 'react'
import "../App.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

export default function Nav() {
  return (
    <div className=' flex justify-around items-center w-screen h-10 py-8 shadow-sm shadow-slate-500'>
    
     <div className='flex items-center gap-2'>
       <img className=' w-12 h-12' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAABwUGAgMEAQj/xABIEAABAwICBAkGCQoHAAAAAAABAAIDBAUGEQchMVESEzZBYXGBocEycnN0sbIUF0NSVZGSk9EiIzNCU2Kis8LwFSQlNYLS4v/EABoBAAMBAQEBAAAAAAAAAAAAAAAFBgQDAgH/xAAwEQACAgECBAMHBAMBAAAAAAAAAQIDBAURITFRcRIzQSIjMmGBwdETNJGhFbHwJP/aAAwDAQACEQMRAD8AuKIiACIiACIiACLB37FVrsmcc8plqQNVPFrd28w7VoF3x7d64ltIWUMJ5o/ynnrcfABbsfT77+KWy6sy3ZlVXBvd/IqtVVU1HHxlXURQR/OleGj6ysJVY2w/TEg14lduhjc/vAy71HZ5ZaiUy1Er5ZDtfI4uce0rimteiVr45N9uH5F89Um/hiVKTSRaGkhlLXP6QxgHe5cBpKteeuhrsuhrP+ymCLR/iMXo/wCTj/kb+pWafSFYpcuMdUwekhz93NZihxFZq9wbS3Knc87GF/Bcew5FQ5fCM9q5z0Wh/C2jpHU7V8STP0Mihdsv11tRHwGuljYPkyeEz7J1fUt1sukeJ5bFeqfij+3gBc3tbtHZmlt+kX18Ye0v7/g21ajVPhLgb+i6aWpgrIGz0szJon+S9jswV3JW009mb09wiIvgBERABERABERABEXTV1MFHTSVNVI2KGNvCe92wBfUm3sgb24s5TzRU0L5qiRkcTBm57zkGjpKmmKMez1hfS2RzoKfYajZI/zfmjv6licW4oqL/UcBnCioGH83Dzu/ed09HN3rX1SYOlxrSnct306CTKz3P2K+XUEkkknMk5knnRETkWBERABERABERABERAHvs15r7LUcdb5yzPy4zrY/zh47VVsL4ro7+zi/0Fa0ZvgcdvS0847wo0uUUskMrJYXujkYeE17TkWneCsOZgV5K35S6/k142XOh9V0P0Gi1PBWLW3qMUdcWsuDG7dgmA5x07x2jo2xSl1M6ZuE1xH9VsbY+KPIIiLkdAiIgAiIgApJjvExvNYaOjf/AKfA7UQf0zx+t1bvr3ZbXpHvpt9tFvpn5VNWCHEHWyPnPbs+vcpSqDSMNbfrz+n5FGo5PH9KP1/B9RET4UBERABERABe212m4XaQx26lknLfKcNTW9bjqCzOC8LOv1Qaiq4TLfC7JxGoyu+aNw3n6t4rVLTQUdOynpYmRQsGTWMGQCVZ2pxx34ILeX9IYYuC7l4pcETak0bXCRudXXU8B3MaZPwXr+LHV/vGvf8ABf8A2qGiTy1XLb+Lb6IZLT8den9sm8mjKcfo7tG7zqcj+orC33BlxstE+tnmpZKdjgCY3O4Ws5DUR071YlrOkfknVefF74XfF1PJndGEnum0uSON+DRGuUorZpdSQIiKmEZzhmkp5mTQPdHLG4OY9p1tI51ZcIYgZf7aJHcFtXDk2eMb+Zw6D+I5lF1k8N3iSx3aKsZmY/JmYP12Hb2846QsGoYayauHxLl+DXh5Dpnx5PmXJFwhlZNEyWJwfG9oc1w2EHYVzUgUYREQAXxzgxpc4gNAzJPMvq1vSDcDQYZqAx2UlSRA3/l5X8IculNbtsjBep4smq4OT9CX4hujrzeKmucTwHuyiB/VYNTR49ZKxyIriEFCKjHkiWlJybk/UIiL0eQiIgAucEMlRPFBCM5JXhjBvcTkO8rgs/gOnFRiuhDgC2MukPY05d+S53T/AE65T6Js91w8c1HqVu00ENrt1PQ04/NwsDc8vKPOT0k5ntXrRFDSk5Nt8yqSSWyCITkMzsUuxHj2tqKmSGzSCnpWnITBoL5OnXsG7n9i0YuJZky2h6HG/IhQt5FRWsaR+SdV58fvhTF19vDnEm7V+Z3VLx7CumoulxqojFU3CsmiOWbJah7mnsJTejSJ12xm5Lg0xdbqMZwlFR5o8qIifCkIiIAqGjC7GqtctuldnJRnNmZ2xuzy+o5jqyW6qL4HuH+HYmo3k5RzHiH9Ids/i4KtCk9Vo/SyG1ylx/JQ4Fvjp2fNcAiIlptCnGliqzqLfRg+Sx8rh1kAexyo6kekqUyYpe0/JQRsHef6kz0iHiyk+if4MOoy2oa6mrIiKrJ8IiIAIiIALaNG3KqL0EngtXW0aNuVUfoJPBZs39tPszvjedHuV1ERRRTmKxVK6HDdzkjJDhTPAI5sxkocrdjDkvdPV3exRJUmieVLuJNU8yPYIiJ0LAiIgAiIgAHOYQ9hye05tO4jYr9Q1Dayip6pnkzRNkHURmoCrVgqXjcK212eeUPA+ySPBJNbhvXCXz/7/Q00uXtyiZtERTg6CjmkHldXdUf8tqsakOkmMx4qlcflIY3D6svBNtGf/ofb7oX6mvcrv+TWERFUCEIiIALcrZo+qbhbqasbcYmNqImyBpiJ4OYzy2rTVccLcmrV6pF7oSzVMm3HhF1vbdm7BohdNqaNJ+LOq+lIfuT+Ky+F8FT2O7trpK6OZrY3M4DYy06+1bmiRT1LJsi4SlwfyQ1hhUQkpJcV82ERFhNZ4r1QuuVpq6JjxG6eMsDyMwM1oXxZ1X0pD9yfxVKRaqMy7HTjW9jhbjVXPeaJr8WdV9KQ/cn8VhcUYVlw7TwSy1sc/HPLA1sZaRqzz2/3mrIprpYqA6vt9MDrjifIR5xAHulM8DPyb8iMJS4dkYcvEoqpcorj3ZoiIioRMEREAFYtHnI+g65f5r1HVacERcVhS2tyyzi4f2iT4pRrT9xFfP7MZaYvet/L7oziIimB4FNdLFLwa6gqwP0kToifNOY94qlLV9I1B8Mw1LKxpMlI8TDLcNTu4k9i26dZ+nkxb7fyZcyHjokiRIiKxJsIiIAK44W5NWr1SL3QoctwtukCsoLfTUbKCB7YImxhxeQSAMs0s1PGsyIRVa5M3YN8KZtzZVUUz+Muu+jab7xyy+FcaVV8vDaGajhia6NzuEx5J1JHZpuTXFzkuC+aGsM6iclFPi/kzdURFgNYReG91rrbaKutjYHugiLw12w5LQfjLrvo2m+8ctWPhXZEXKtcjPdk1UvabKYpDpHqBPiqZg+Qijj7uF/Usl8Zdd9G033jlqF1rpLncaiulaGvnfwi0HUNWWXcnGm4F1FrnYvQXZuXXbWowfqeVERPBUEREAfNZ1NBLjsA5yr7baYUVupaRuyCFkY7AAo3g+gNyxJQwkEsZJx0nms16+s5DtVtU9rdm8oV/Uc6XDhKf0CIiRDULhLGyaJ8UrQ6N7S1zTsIO0LmiAINeLfJabpU0EuZML8g4/rN2tPaCF41TNJljNTSMu1OzOWmHBmAG2Pf2HuJ3KZq0wslZFKn6+vcmcml02OPp6BERajOEREAFtGjblVH6CTwWrraNG3KqP0Engs2b+2n2Z3xvOj3K6iIoopzD4w5L3T1d3sUSVtxhyXunq7vYokqXRPKl3+wk1TzI9giInIsCIiACIvbZLZNeLnBQwZgyH8p+WfAaNrv758gvkpKMXKXJHqMXJ7I33RbauJo6i6yt/KqDxcRPzGnWe13ure100lNFR0sVNTs4EUTAxjdwC7lE5V7vtlY/Up6KlVWoBERcDqEREAfHNa9pa9oc0jIgjMEKN4zw6+w3DOFpNDOSYXfNPzD0jm3jqKsq8tzt9NdKKWjrI+HFINe8HmI3ELbg5jxrN/R8zNlYyvht6rkQRFl8SYfqrBWcVOC+B5/Mzganjcdx6FiFX12RsipRe6ZOThKEvDJcQiIvR5C2jRtyqj9BJ4LV1tGjblVH6CTwWbN/bT7M743nR7ldREUUU5h8Ycl7p6u72KJK24w5L3T1d3sUSVLonlS7/YSap5kewRETkWBEQAkgAEk6gBzoANaXODWtLnOOQAGZJ3BWDA+HP8AA7eZalo+HVABl5+AOZg8enqCxmBcIGh4Fzusf+aIzhhd8kN5/e9nXs3hTeqZ6s9zW+Hq+o7wcTwe8nz9AiIkozCIiACIiACIiAPPcKGmuNI+lrYWywvGtrvaNx6VKsUYMrLOX1FGH1VBt4QGb4h+8OcdI7clXUWzEzbMZ+zxXQzZGLC9cefU/PK+qt3/AANbbo501N/kqp2sujbmxx6W+IyWgXfCN5tRLpKUzwj5Wn/LHaNo7QqTH1Gi/k9n0Yluw7avTdfIwa2jRtyqj9BJ4LVs1tOjblVH6CTwXXN/bT7M543nR7ldREUUU5h8Ycl7p6u72KJK24w5L3T1d3sUSVLonlS7/YSap5kewRd9FRVVfLxVFTy1D+cRsLsuvd2rcrLo6qpi2S8zCnZ+xiIc89Z2DszTK/KpoXvJbf7MVVFlr9hGnUFDVXGqbTUMD5pnbGt5hvJ2AdJVRwngyns/Bq64tqK/aCPIi83een6sufYLXa6K00/EW+nZCzactrjvJ2ntXsU7mapO9eCHCP8AbHONgRq9qXFhERKjeEREAEREAEREAEREAEREAEREAY64WO1XIl1bQQSvIy4ZZk/7Q1rw2vCNrtNzbX0AnjeGubxZk4Tcj16+9EXVX2xj4FJ7dDm6q3LxNLcz6Ii5HQ81yoo7jQT0U7ntjnYWOLCAQDuzWGosEWCkId8C49w553l/ds7l8RdYX2wj4YyaRzlVCT3kt2Z+CGKniEVPEyKNuxjGhoHYF2Ii5N7nQIiIAIiIAIiIAIiIA//Z' alt=''/>
       <SearchIcon sx={{fontSize:"2em",color:"gray"}} />
      
       <svg className=' lg:hidden md:hidden xl:hidden 2xl:hidden flex' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-list" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
       </svg>

     </div>

     <div className=' lg:flex md:flex xl:flex 2xl:flex hidden gap-8 items-center '>
    
        <HomeIcon sx={{fontSize:"2em"}} className=' text-slate-500' />
        <SubscriptionsIcon sx={{fontSize:"2em"}} className=' text-slate-500' />
        <StorefrontIcon sx={{fontSize:"2em"}} className=' text-slate-500' />
        <PeopleAltIcon sx={{fontSize:"2em"}} className=' text-slate-500' />
       
        <svg className=' md:block hidden' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-list" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
       </svg>

     </div>

     <div className=' flex gap-4 justify-center items-center'>
       
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
        <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
       </svg>

       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
       </svg>

       <NotificationsIcon sx={{fontSize:'1.5em'}}/>
       <Avatar src='https://img.freepik.com/premium-photo/portrait-smile-man-with-positive-confidence-carefree-against-grey-studio-background-face-male-person-human-with-cheerful-attitude-freedom-model-with-joy-canada-relax_590464-177008.jpg?w=740'/>
     </div>

    </div>
  )
}

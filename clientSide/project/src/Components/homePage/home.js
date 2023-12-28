import React,{useState} from "react";
import Navbar from "../navbar/navbar";
import "./home.css";
import Footer from "../footer/footer";
import { useNavigate } from "react-router";
function HomePage(){

    const[showVideo,setShowVideo]=useState(false);
    const handleShowVideo =()=>{
        setShowVideo((prevState) => !prevState);
    }

    
    const homeNavigation=useNavigate()
    const homeHow=()=>{
        homeNavigation("/chitiPage")
    }


    return(
        <div >
            <div className="color">
                <div className="navPage">
                    <Navbar/>
                </div>



                <div className="bannerDiv">
                    <div className="homeLeft">
                        <div>
                            <h2 className="homeText">Experience the power of collective savings.<br></br>
                                Start your chit fund journey now with
                            </h2>
                        </div>
                        <div>
                            <h3 className="homePara">Chit funds, prevalent in some cultures and countries,<br></br> 
                                are a form of savings and borrowing system. They operate <br></br>
                                as a type of rotating savings and credit association, where<br></br>
                                a group of individuals come together for a defined period, <br></br>
                                contributing fixed amounts periodically.</h3>
                        </div>
                        <div>
                            <button className="homeBtn btn animation">CHIT FUNDS</button>
                            <button className="clickBtn" onClick={handleShowVideo}></button>
                        </div>
                    </div>



                    {showVideo ?(

                        <div className="videoDiv">
                            <iframe title="ChitFundsVideo"width="580"height="350"src="https://www.youtube.com/embed/ftMyxTz0IxQ"allowFullScreenframeBorder="0"></iframe>
                        </div>
                    ):(


                        <div>
                        <img className="bannerImg"src="https://img.lovepik.com/photo/40218/0565.jpg_wh300.jpg" alt="error"/>
                        </div>
                    )} 

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#273e87" fill-opacity="1" d="M0,224L120,208C240,192,480,160,720,154.7C960,149,1200,171,1320,181.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                </div>



                <div className="Process">
                    <h1 className="ProcessHead">Process Of Chiti</h1>
                    <h4 className="ProcessSmall ProcessSmallDiv">It's crucial to thoroughly understand the terms,<br></br>
                    </h4>
                    <div className="ProcessSmall"><h4>conditions, and legal implications before joining one.</h4></div>
                </div>

                
                

                

                <div className="processDiv">
                    <div className="hoverEffect">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2bPmmD-qHp8VRk-Wau78dj9BoatYTGhRpLqsJJICrQgi8-uN8bJpjNlUOg3wM9gm1dc&usqp=CAU" alt="error" />
                        <div className="processText">
                            <h5>Individuals come together to form a chit fund group. This group can be formed among friends, family, or within a community. The number of members and the contribution amount are agreed upon at the beginning.</h5>
                        </div>
                    </div>


                    <div className="hoverEffect">
                        <div>
                        <img src="https://www.dividendportfolio.com/wp-content/uploads/2023/05/dollar-2091739_640.jpg" alt="error" />
                        </div>
                        <div className="processText">
                            <h5>Each member contributes a fixed amount of money regularly over a defined period. This period could be monthly or as agreed upon by the group. These contributions form a pool of money</h5>
                        </div>
                    </div>

                    <div className="hoverEffect">
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPxv6qJaWFyIkJtYFeYyB_jp9BUXZt67NBw&usqp=CAU" alt="error" />
                        </div>
                        <div className="processText">
                            <h5>During each period, the total pool of money is auctioned among the members. Members bid for the amount they need at an interest rate determined by the auction. The lowest bid amount wins, and that member receives the pool minus the bid amount.</h5>
                        </div>
                    </div>

                    <div className="hoverEffect">
                        <div>
                        <img src="data:image/jpeg;base64,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" alt="error" />
                        </div>
                        <div className="processText">
                            <h5>After each auction, the member who won the bid receives their share of the pooled money. This continues until each member has received their share at some point during the cycle.</h5>
                        </div>
                    </div>


                    <div className="hoverEffect">
                        <div>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8QDw8QEBAQDw8PDw8QDw8PDxAPFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQFy0dHyAvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAMgA/AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQYHAgQFAwj/xABFEAABAwICBgYGCAIJBQAAAAABAAIDBBEFIQYSMUFRcRMiYYGRoQcUI1KxwRUyQkNTYnKSgtEzNGNzorKz0vA1ZHSTwv/EABsBAQACAwEBAAAAAAAAAAAAAAABBAMFBgIH/8QAMREAAgECAwUGBgMBAQAAAAAAAAECAxEEITEFEkFRsSJhcYGh0RMUMpHB4TRC8FIV/9oADAMBAAIRAxEAPwC8EIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCE0AkJoQCQmhAJCaEAkJoQCQhNAJNJCAaSEIATSQgGhJeVROyNpfI9rGNF3OcQGgdpKA9Vi94aCXEADaSQAO9QLHfSMxl2UbOkIuOldk3m1u099lA8VxqpqzeeZzxe4bezByaMgs8aEnrkayvtSlDKHafp9/a5bGJ6aUUFwZekcPsxgu7tbZ5qM1/pNP3NNbgZHE+TbfFV8GpgLMqEF3mrqbUrz0e74e7uyx9C9LKutruilLOi6CSQtawCzg5oGe3eVYaqn0Sx3ral3uUzG/vff/AOFayrVUlKyN3gJSlQjKTu3fqJNJCxlwa8amXUje87Gtc48gCV7Lj6WS6lBVnjA9g5vGqP8AMpR5k7JvkVhDpziDTfpg6+dnMZb4LsUXpNkH9NTtd2sc5p8DdQQpEK+6UHwOSp42vDSb69blw4bp3QzWBe6J53SA28RcDvspLDK17Q5jmuadjmkEHvC+eNVbmG4rUUrtaCV8Z3gHqnm05HvWGWHXBmwo7Xksqkb+GXpp0L/TUA0d9IjJLR1jRG45CVv1D+pu1vPZyU7jka4BzSHNIuHNIII4gjaq8ouLszc0a9OtG8HfqZoTSXkzDQhCASaEIASTSQDQkhANCSEA0kLi6TY/HQQ67utI64ij3udxPBo3lSlfJHmc4wi5SdkjLSLSCGhj1pDrPdfo4geu8/IdqqPHdIaiufrSuswHqRNyDBy3ntK08RrZamV00zy97jmdwG5rRuA4LWsrtOko58TmMZj513ZZR5e/toIBNNCymvEhNCAn3ogj69e7spm+HSH5qy1Xfoi+rWfqg/yuVhqhV+tnW4D+PDwGhJCxlwajPpEk1cNmtvdA3uMjVJVFvSV/05/97B/qBe6f1Ir4t2oT8H0KfKEIWxOOBJNCAxLVItF9LJqBwYby05PWiJ+rxc07j2bD5qPpELzKKkrMy0qs6ct6Dsy/sMxCKpibLC8PY7fvB3tI3EcFuqjdFtIJKCbWF3QvIEsV/rN94fmG7wV1UlUyaNksTg5kjQ5jhvBVGpTcGdRg8XHERvo1qv8AcDYQkhYy4NCSaAEIQgEmkhANJCCUBr1tWyCOSWQ6rI2l7j2D4lUhj+LSVtQ6aTIE2YzdHGD1W/z7bqX+k7GtZzKSN12t9pNY3u77DDy297VAbK3QhlvM53auKcp/CjpHXx/XUVk0IVk09wSWSSC4IQhBclvo2xeOmnnbM8NZMxlnn6oewuyPC4cfBSTH9PIobspx0r/eIIaO7afIKrxcbDZY2WJ0YuW8y9T2hWp0lSg7Lnx9vQ69RpTWSP1zO+97jVc5oHINsArG0C0hdWwvZKbzQ6occhrsdfVfzyIPLtVR2Ul9HlYYsQib9mdskLuF9UvafFgH8SitBOHge9n4mca6Tk2pZO7b18S4lxdLcOdVUU0TBd9mvY3ZrOY4ODe+1l2UKknZ3OnnBTi4vR5FP4NoPVzuHSM9Xjv1nSjrkflZtJ52VgYTohR0wFohI/fJLZ7iewbB3BSBNe51ZSKuHwFGjmld83m/ZEC9IOjcXQGpgjbG+IjpAwBoew5a1hvBtnwuqzsvoDEKYTQyxOFxJG+Mjsc0j5qgrW5nI81Yw8rprkaja9FQqRmlbe18V+jBCyQrBqDCymvo20g6CX1SU+ymd7InZHNw5O+NuKhiO0EgjMEZEEbCO1eJwUlZljD13RqKa/yPodNcLRjG21VJHM9zQ8ezmuQAJG5HxyNvzBdF2JwDbI3zWvatkdhGSklJaPM3ELyhmY8XY5rhxaQfgvVQegQhCASELSxivbTU8s7sxG0kD3nbGt7yQO9AamNY22AiNgDpSL2P1WDi7+S4UtS5wdJM9zg0FxueqABc2GwLh0E7pHOkebve4vce0/JeukVRqUjxvkLYx23zPkCpirux4q1FTg5vgrkKqJjI98jtr3FxHC+7uyHcvNZWRqrZ2scRKTk7vVmKLLKywGaEDsiyYHYi3cgEhNqyshFzCydl6wQukeyNgu97msaN2s42HxVuw6G0TYRE6Fr7CzpSSJHO3uuNnLYsdSqoal3CYKeJu4tJLnzKdsuroowmvpANvTsPcMz5ArvY3oFPE4upfbx7mktbK3sN7B3MeC39BdFZoZ/WKlmoY2uETCQXFzhqlxA2CxI715lVi4NpmWhga8cRGMovJp34WXeWEhCFROqPGoqY47dJIxmsbN13Nbc8Bfava6pHSnEzV1Msjus0Oc2IHMNiabCw3X2nmtnR3SyoogGAiSHdFITZv6HbW8sx2LP8u7XNQtsUviOMlaK46+hcM8oYx73ZBjS4nsAuVQDzc34gu8Tf5qZ4/pq+pgdCyMQtkGq92vrvczewCwtf4KGOzKzUabinc1+08ZTryjGm7pdWYIWVk7LOau5gmsrLGyAkugtVqzvhOyVpLf7xv823/aFNJmBVdQ1XQyxS/hva8/pB6w8LhWpO7JUq8e1fmdLsmvvUdx/1fo9Di1L3RO14nFjhvabdx4jsUi0Y0jFVrRSWbUMFyBskZs12/MblHMQdkVFKjEn0s8dRH9aJ+tbZrN2OYeYuO9YDbF3prxpp2yMZIw3a9rXtPFrhcL1QAof6TpSKKNo2PqYw7kA51vEDwUxUe06w81FDKGi74y2Zo46n1h+0uQECw2WwCw0pqLsiZ+t/gLD/ADFatFLle+QF+5eeOm74x/Zh3LWcf9oWaiu2jX7Tlu4aXkvuzlJp2TV85IxQBtHAp2Qdo7R8EAJO4JoduPioCEAmnZCki519DWh2JUTTs6SR3eyKR482hXSqV0Odq4nQn+1kH7oZG/NXUqWI+s6jY38d+L/AITQq5thLUxSXUgmeNrYpXDmGkrcWhjf9Vqd3sJszs+o5CHoUWAiyaFtTgo6GOqiyyshCTFCyRdAYoTLgjWCgGJCsLCK3pKSBxOeoGnmzqnzaq/UjwCf2Bb7sjvOx+ZWCuuybbZE7VZR5rodLEJhmobjRvdSOrftUdrI3SODGNLnvcGMaNrnE2A8VTZ0yLd9H0hdhVEXbRCG9zSWjyAUiWjg1CKamggGYiiZHfiQLE+K3lBIkIQgKx0nwL1ad+oPYzsfJGPccPrs5Zgjn2KPY7ERK3WuPZssRwu5TXTPG4jM2naNZ8Ye1x3Nc8Nv4AeajGkzL9E8cCw/EfArNQfbNbtaLeGduFmcHV/N4hLVPEeay1Uaq2FjkriseI80tVemqlZLC5iAnZZIQi5hq8Ljs2hLV7T5LNOyWFzqaIxa2I0Qz/pnO2+7E93yV0KrvRxRGSsMturBETf8AO+7R5a6tFUMQ+2dXsaLWGu+LbBNJCwG1Bc3ST+o1f/iz/wCm5dJRjT7EBFRuYD15z0YH5Nrzytl3hTFNtJGKvUjTpylLRJlTao4Iss0WW1scIm7Hmcu0eayssrXIHe7kgqCWzGyxYTYDhkvSyxA63MeYQJiuUis7IspsLmNhwC7+j8d4svxD3LhbFKcAhLXBm7o43H9RJv8AHyVbEPspG42PG9WUuS6v9HjisRYwuOwLu+j3Rkt1a6oHXcL00Z+wxw/pT+Yg5cAe3LcxmhjfSyXy6pUiwGtbUUsErLWdG24H2XAWc3uII7lTZ0y0OihJCgka0cVrRBEX7XHqxt9552Dlv7lvKF11Z6zO54Pso7si4H3n95HgAgIxV0DnTukze9x13n852rKtoJJGOLxbVBcxt8y4bz5+K7mrZy8aySwJ7F6jk7ow1oqcXF6Mg4CLLZqqV0eqSLNkbrRncWEkeRBC8LLZxe8ro4arTlSm4S1WRjZFk7J2Xox3MbJp2Uw9GMkb5auN7GF4EbmFzQTqZhwF91yPELHUnuRva5awmH+Yqqnfdvx1IckG32C5OQA2k8FaGP6GQ1F3w2gl7G3jdzaNh7R4FeGjOhvq8gmncyR7DeNrblrXe+SQLnhlksfzMLX9C5/42IVTcyt/1+tfL1Opolg/qlM1rh7V/Xl7HHYzuGXjxXeSQqLd3dnVU6cacVCOiyRxtI8fiomNLgXyPuI4mmznW2kncBcZ9q18A0rgqzqWMM26N5B1v0u38siol6RnH1xvZCzV5HWuowx9iDwNwd4PEK1ChGUE+JoMVtarRxMopJxjlbn334dC8pHhoLnEBoBJJyAA2kqotKsXNXUOeL9G3qQg5WZvdzJz8OCdZjk0sfRyVD3tsOoSM+eWfeuO43N1kpUNx3ebKeP2p81FQhFxjxvq/wBf7gYWQQskKwaq55s+0O3ytksrILUw3tPkoPTYkmi51twvbtOxPVHC/PNMqSLmNkWWVkWQXNnCaTpqiGPc+Rod+gZu8gVLcNAbKyQ2sY3N78iPgVq6DYCZ9eoLzG1h1GENBJcQC4i/AWF+0roV1AGyyRNeQ1rsrgF2wHb3qhiJ3lbkdVsig4UN9/2d/LRe/ma+kWJ60b2MzJFhzK9vR7I6jAppX6zJnFzDuZMdrR2G3jzXm/DmNAIBJ4uNylUU94y3MZZEZEHcQVXNwWKhcTRjFDVQde3TRHo5hsu7c/kRnzvwXbQHK0lqTFSzOabOLdRp4F5Db917qK0Tg1oHAKXY7SdNTSsG3V1m/qb1gPEKF02YFkBuSOC5GKSEghoJceq0DMlxyAC3K6QsaSVvaE0DZr1cmeq9zImEZAi15O055cPh6R4auZ6SaPXw+FrReWliAFsy5lh0jRx2X7u1V3ZXtZVdpjgRppddg9jISWcGHaY/mOzkrOGqf0fkaDbeDeVePhL8P8PyIzZFl6WSsrpzlzGyyocRkoqmOqjF9XqyM2B7Dtaf+bQE7ItfIi4O0LzKKaszJSqunNTjqi5cKxOGribNA8PY4fxNO9rhuI4LeVGUJnpnl9LO+InaA7I8xsPeuo/STEyLGrtybED5BUnhZcDpqe3KLj2079xb6FX+gWkFRJUyU1TKZdaLpYnOtrAtIDhcbRY37lYKwTi4uzNph68a9NVIaMhPpGwwuZHUNH9HeN/JxGoe43H8Sr4tV4zQtkY5j2hzXAtc07CDtCrvGdCp43k0w6aMnIawD2Dgbnrcx4K1QqpLdkzR7X2fUlP41JXvqlrfn35ES1UWUmoNDKuU9djYW8ZHNJ7mtv52WGkOi7qNjZOkErC7UcRGWFrjsyubg2OasKrBuyZqHgcSqbqODSXP219CN2Tss7IsshUuYWSss7JWQXFZKyzsiyC5jZelNTPleyOMaz3uDWjiT8t57AVjZWFoLgHRN9ZlbaR7fZtIzYw/a7CfIcysVWp8ONy5gcK8TV3OCzb7vd8P0SXCKBtNBHCzYxtifedtc48zcqN4/GY6txOyVrXN4XADSPLzUyXNxqgZPEQ46rmXex+9hA8xxC1tzt1FJJLJIjbLFedSQAtGjqibtOThkQvepBsjPRho1VmLEGAfVqGuicPzAF7XeRH8RVhqvtGqTpa6N26EOlJ7baoH+LyKsJQBEqBvi6KeWPc2R1v0nMeRCl0syiukErWzMffOQEEdrbZ+BA7ggPHFodaJ2W5SLR1ogpYmEjWLdd9tms/rEd17dy48Tg9q58+KPp+pquLW7CNgadgKkjiTr1scV4VscdRE6OQazHixG8HcQdxChdNjpdxC6kGIkqA0mrMiGN4Q+lk1HdZhuWPGx7fl2hc6ysmZzJ4zHK3Wad28HcQdxUOxjBJKe7hd8W54Gbf1AbOexbCjXUsnr1OS2lsqVFupSzh6r3Xf9+Zx7ITQrBpLisiyaEJudHRN2pilEfedNGeRieR5gK31TmBG1dQn/uGjxa4fNW/0q1+KXb8jr9hO+G82eqSwD0+kCrm5MlxNMow6hnv9no3eD2ldnpAuVpRnRVP90T4Feo/UjFXipUpp8U+hU1krLIhJbc+dp5CQmiygkxsiy9oYXPcGMa57jsa0EuPcpvo9ok2MtlqbPeM2xA3aDuLj9o9mzmsdSpGCzLmEwVXFStBZcW9F7vuRqaIaLl5bUVDfZizooztedzyPd4Dfy2z8uC1JKmy1Zayy105ubuzs8LhaeGp7kPN83zOmZQtDF6n2eoNsnV/h+15Zd60JcQXhM5x67twsBvAXgsM59ZA1rmvsNoBPYVliA6h5LkY7i1nxxNIDnuzcdjWjNzj/AM22XUjd0kN9t25FCTb0DYNWokO10jYxya2/xd5KW6wUH0Sq9RksZ2tlLu5wFj5HwUkFUgNWunsCoNpFLJI9hj1SWawIcbXBtsPcrGqaEOXIqNGo3G5FjxBsgOHgUxdGNfJwycL3zC3qikZI0gkjWFiQdoWTdHHx3EcoDSSbOYXEX7QQvN+DzD7/AMIz/uQixyPUujfqawOVxyW7C2yceEOjLnXe9zsi51tnAcFg9szfur96A6UDluxyce9Rk1s7fuCvN2LTb4rc9ZTYHSxPAIZLuiPRO4AXYf4fs93go7V4TNFfWjLh7zbPHlmO8LcONS+4P8SPp2Tg3xKzwrzjlqavE7Jw1Z7yW6+a9tOhxE11pMWLvrxxu5i/xWvJO0/ct/dJ/NZlilxRqp7AmvoqJ+Ka6XPHDbiqpCN1TGVZzZyq/wAG1fWIyIhcEkdZ5tkRexPapqL2yCwVqinK6NvszCTw1Jwm023fK/5SN7p7b0etDiuVK9/Bc+eeYbIye9YTZEm9bHFc/SCqDqSpH9i/4Lhirn/CPiF51FVKWuDoiWlpDgTkQRYhSsmeJZxa5pkVKLLcDo/wR/7JF7R1jG7IIz+pznfFXnio8EzlYbBraSnFfd/hGlBTPkNo2F5/KMu87Au1Q6Ml1jM8Rj3AA957L7B5rz+n3jIMaBwBICR0gf7g/cVhliJPTI2eH2JQhnUbm/svsvcluHww04tEwNvtdte7m7aVuetqDjHn+54Er1bjUh+6Pn/JVnm7m5jFRSjFWS5EvknvvWlNIuIzE5TshcvUVMzvuiO9QSe0tZJE64iMgI2tzLTwXNqscqCTanlA/SunFHIdoIXu3DnO2oCMYdgU9ZP08o6GMNc0XsXuuRsG4ZbSpeyiZFG1jDk0WzNysYqCdlxG5pbe4a7WBHZcXS+jKpxuTFy13/7UJOJG/o6oj32E97SP5qRRS5BalPoxIZulle02aWhjbnaRnc24cF3I8NAFrIDrkLEsWaEB4mJYGAcFsIQGqaccEvVhwW2hAanqo4DwS9Ub7o8AtyyLIRY0vUm+63wCZoGe439oW5ZFkIsaP0fH+Gz9rUHDIvwmfsat6yLKbjdNFmHRtzbGwcmgLP1YcFt2RZQTY1fVhwR6o3gtpCCxqikbwHgg0TTuHgtpNBY5pweA5mGP9jU/oeD8GP8AY1dBFkFjn/RMP4Uf7Go+jIvw2ftC6FkWQixofR7Pcb4BP1JvujwC3rIshJo+qN90eCYpRwHgt2yLISagphwCYgHBbVkWQHiI1mGLOyaAxDU00IBIQhACEIQAhCEAIQhACEIQDSQhANCEIBJoQgEmhCAEIQgBCEIBJoQgBCEIAQhCAEIQgBCEID//2Q==" alt="error" />
                        </div>
                        <div className="processText">
                            <h5>The chit fund cycle continues until all members have received their share. Once the cycle completes, the chit fund may dissolve, or the members may choose to continue with another cycle, rejoining or forming a new group.</h5>
                        </div>
                    </div>
                </div>

                <div className="processName">
                    <div className="groupMargin">
                       <h2 className="Name">Forming group</h2>
                    </div>
                    <div className="contibutionMargin">
                       <h2 className="Name">Periodic Contributions</h2>
                    </div>
                    <div className="auctionMargin">
                       <h2 className="Name">Auction</h2>
                    </div>
                    <div className="payoutMargin">
                       <h2 className="Name">Payouts</h2>
                    </div>
                    <div className="closeMargin">
                       <h2 className="Name"> Closure and Dissolution</h2>
                    </div>
                </div>

                <div className="saveDiv beniftDiv">

                    <div>
                        <div>
                            <img className="benifitImg"src="https://muthootchits.com/wp-content/uploads/2022/01/financial-inclusion.png" alt="error"/>
                            <h2 className="save">Inclusion</h2>
                        </div>
                    </div>
                    


                    <div>
                        <div>
                            <img className="benifitImg"src="https://muthootchits.com/wp-content/uploads/2022/01/business-finance.png" alt="error"/>
                            <h2 className="save">Business</h2>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img className="benifitImg"src="https://muthootchits.com/wp-content/uploads/2022/01/twin-benefit-advantage.png" alt="error"/>
                            <h2 className="save">Twin Benefit</h2>
                        </div>
                    </div>
                </div>


                <div className="saveText benifitText">
                    <div>
                        <p className="saveWidth firstBenif">Individuals employed in the informal sector do not meet the eligibility criteria of banks and other financial institutions. </p>
                    </div>
                    <div>
                        <p className="secondWidth secondBenifit">Start as savings and opt to bid for the Prize Money whenever required. Chits offer the dual advantage of systematic savings and providing monthly dividends.</p>
                    </div>
                    <div>
                        <p className="thirdWidth">Chits are an excellent source of finance for business owners who can use the Prize Money to either start a business, finance business operations, or purchase capital assets for the company.</p>
                    </div>
                </div>


                <div className="chitCycleDiv">
                    <div className="cycleDiv">
                        <h1 className="cycleHeading">The Chit Cycle or The Chit Process</h1>
                        <h4 className="cycleText">Chit funds are popular for their accessibility, as they don't require credit checks or collateral. </h4>
                    </div>
                    <div className="cycleImgDiv">
                        <img className="cycleImg"src="https://muthootchits.com/wp-content/uploads/2021/12/how-chit-works-process-1.jpg" alt="error"/>
                    </div>
                </div>


                <div className="howChitiDiv howPadding">

                    <div>
                        <div className="howMargin">
                            <h1 className="howHeading">How The Chit Work</h1>
                        </div>

                        <div className="howChitiDiv howMargin">
                            <div>
                                <img className="howSmallImg" src="https://kapilchits.com/img/chitvalue-icon.png" alt="error"/>
                            </div>
                            <div className="howText">
                                <h2 className="howHeading">Chit value</h2>
                                <h4 className="howSmallText">There is a new chit group that is commencing. The value of <br></br>
                                the chit is 500,000. This amount is known as the Chit Value.</h4>
                            </div>
                        </div>

                        <div className="howChitiDiv howMargin">
                            <div>
                                <img className="howSmallImg"src="https://kapilchits.com/img/timeperiod-icon.png" alt="error"/>
                            </div>
                            <div className="howText">
                                <h2 className="howHeading">Chit period</h2>
                                <h4 className="howSmallText">For the purpose of this illustration, we will consider the<br></br>
                                duration of the chit to be 50 months. This is known as term<br></br>
                                period for the chit group.
                                </h4>
                            </div>
                        </div>

                        <div className="howChitiDiv howMargin">
                            <div>
                                <img className="howSmallImg"src="https://kapilchits.com/img/subscribers-icon.png" alt="error"/>
                            </div>
                            <div className="howText">
                                <h2 className="howHeading">Subscribers</h2>
                                <h4 className="howSmallText">The Foreman or Chit Fund Company has to gather 50 people <br></br>
                                who are interested in investing in this chit group. These 50<br></br>
                                persons are called Subscribers.
                                </h4>
                            </div>
                        </div>
                        <div>
                            <button onClick={homeHow}className="landingBtn howBtn btn animation">Read More</button>  
                        </div>

                    </div>


                    <div className="rupeeImgDiv">
                        <img className="rupeeImg"src="https://kapilchits.com/img/rupee-works.png" alt="error"/>
                    </div>
                </div>



                    <div>
                        <h1 className="saveHeading">Smart Way To Save and Barrow</h1>
                    </div>

                <div className="saveDiv">

                    <div>
                        <div>
                            <img src="https://kapilchits.com/img/plan-icon.png" alt="error"/>
                            <h2 className="save">Plan</h2>
                        </div>
                    </div>
                    


                    <div>
                        <div>
                            <img src="https://kapilchits.com/img/borrow-icon.png" alt="error"/>
                            <h2 className="save">Borrow</h2>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="https://kapilchits.com/img/reap-icon.png" alt="error"/>
                            <h2 className="save">Reap</h2>
                        </div>
                    </div>
                </div>

                <div className="saveText">
                    <div>
                        <p className="saveWidth">Plan your finances such that you meet every contingent expense without feeling pressured.</p>
                    </div>
                    <div>
                        <p className="secondWidth">A chit is the only financial product that allows you to save and borrow. Be smart; avoid the pitfalls of borrowing at exorbitant costs from money 
                            lenders and other financial channels. Borrow with lesser hassles.</p>
                    </div>
                    <div>
                        <p className="thirdWidth">Kapil chits is your trustworthy, safe and reliable companion to 
                            help you reap maximum benefits from investing in a chits.</p>
                    </div>
                </div>

                <div>
                    <img className="grid"src="https://img.freepik.com/premium-vector/financial-business-statistics-with-bar-graph-candlestick-chart-show-effective-earning-background_120819-1009.jpg" alt="error"/>
                </div>
                

                


                

                <div className="homeFooter">
                    <Footer/>
                </div>
            </div>

        </div>
    )
}
export default HomePage;


import React from "react";
import { Header } from "../Atoms/header";
import TituloPelicula from "../Atoms/tituloPelicula";
import { Descripcion } from "../Atoms/descripcipcion";
import { DondeVerlo } from "../Atoms/DondeVerlo";
import { SliderDC } from "../Atoms/sliderDC";




import '../Pages/style/pelicula.css'

const plataformas = [
    { name: "Youtube", link: "https://www.youtube.com/watch?v=NGN2sdjhZV0", image: "https://assets.turbologo.com/blog/es/2019/10/19133013/youtube-logo-illustration-958x575.jpg" },
    { name: "AppleTV", link: "https://tv.apple.com/mx/movie/mid-90s/umc.cmc.5vsuvbt61ehwlyij9852seli2", image: "https://ssl.gstatic.com/kpui/watch/apple_tv_plus_40x40.png" },
    { name: "PrimeVideo", link: "https://www.primevideo.com/dp/amzn1.dv.gti.faba3cca-206a-62b9-08b3-1966ee77807b?autoplay=0&ref_=atv_cf_strg_wb", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEUamP8BBhsAAAAamv8bnP8bnf8AABcAABAAAA4AABIRYp4MRnkBBRoZkvQAARgXieYVgdgHLlABEioIOmMQYKIOVpANS4UYjeoJNFwAAAkBCxwTcsAVetAINWAAAAYXieMRZq0Xg9gGJT4KP28FGzMSa7UTdMQGJkgScbwLQWwOVJMHK0kGHzgRZKkbof8GJEEOT4IEFCEDGC8EHjsDDigEFysNSHYVe8kCESQTa7EJOWcLRXwBDRwHK1ELQmoNTX4KOFkGHzIwmc0+AAASXUlEQVR4nO1dCXequhbGJCgeiUBFkcpRW4u1WrXD6+lw2/te//+feglkYlB7QNvaxbfWXfeAachHhj1k76BpFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoWPAOkrXUdf3YrDAcJBq9NpTSH86pYcCNC7BMD3Aejjn0kRag6oRQCTH8pwyggSivaPpIh6kqH7IxnqLclw/iPXUzSXDMc/sg+hzRmawPqRDDXYAmZMsPcjBykVFz0QYa79zC4kFHUrnM8HHvqpBAkg0vUfq7MdI2CEQ9QJP3AzXWLfT4dwBUdnZ2cjrKdnFUw1iI5MHaq/KL8lriHila7kYgv1FWZPymdBCugYY438ryRPZAcUFqJN0aZX6yZdFx8cN/loqEXFgth+gAgGz91elwpA/ksQ8LUUYuWarkPOdSOqtB9q7J0g23UufHrzzhlkGZD6SYHF9d3F9aLvBlqZRQyN46UehITf+AL4dSrczHoDGInVH/bjYndaRMp9iK5+w0geMvTYQMD38fUCkqbaEx8YrFIDrEekDNJCYnA1xE3HSglShN07AIxmnaBpAHDhlhBEXK00nJV9D5o1iTZ5shx3+KQea2Yh0lBwB6KrpkN/cxrxHxiduKFwNDTjssHKagF2EcN/tXU0vQCNxM2kUQJR+BrXz1EHF7ZelqFpjhP8oifXRvzJguHwBiGXl2QMm2mGRtz+YdcFwEzW2biz+8nm05snivEM8QS0UwVqTTAtqjAJ06CdbguleI/F1GIM6yd6T5TcxJD3kJFTZxMYmXs10BVdBHEfZAuQbrQLUlSMnxiJNoFWmqHZlPbgToYfRl10IoQTUX/dMAzR3ca64FRUGZoGWzJEtSYIUJJhzRzKhn2AodmIq0zMAH5TjlYQsPajJW+PAe47nc6dKERXgJIMAegs7ZE3srtPgoXf5+vjSWrymKa5m2EbgMteaI9Gy3tf/CW5+RbfvBA3gcv+1jLYHAR9GxOJiwc19mC/U5bhsGcRMUShe31p88XLXIJhm3bBkEqzFtrK0DyZW1BHUZWXDf7X/3HFzXvetXwiIj5GieiBsTi12WSun3iFxqlgaDY8RTbcibEx11MM66DZ7w0C27aZ/N/MEPRWvE59zF9a/s2YIbQYHTJ2xDLOpJHpj8oyVCx0PeSPbjqpPqyfDDwdqXrZNoZyiRw12tmbgcFLxgx15hIxxbwk3crl2V4ZQvwgOjHqJ8nQ6K9SD/oYQ+80h6H1ym+yPlzHdTXeZPVo4h+Aoaa/8EUgnogqw7R2UYbhaYIhHLFBqvglIXxicqqxV4ZQzpAx+jSGiHuXwWDFpoEOeQOb98V2DTYwRAPBMFpqPochn4a1Ziu0bYvAXq5FQ1rFVNNNDIPkKvdJDKXoirSEhqIqmKDYIN04SrkU+lyGV4rCRHSKtqL9AbegdfHNGErNJ4l68R2DY2DYNsDdtLR9+E3mIRulJpmAfpOiQWZksx9qxd3pu9fS5ScyvGHqy+l0Ov+9cBYLx5m4UwuV8UXtlofB58lD3RVKm05defQ/HZX0pe/WaTJa22dI/OX+Nnl26aX1tfapWlt86f/en0t6l23BNIlPYgjXTAcdFvXKbGPY9ESlSDEtYjfG5zCUrRn20x7Swp2q2vge4jb+mzAP11rKPjwoQyiF1G8svPmkSWS1KUpR9dMYk7GNMQ66NaE8gTDtpzkoQw0KZweozUeYbo4giK3Z/M0oqHgnfW1D5msTDlnjEn4yQxmdUwfgpD/58+fqskaa1Gi+r8ozjGkq/24LZ8JnMRQ+i5hkw/B9oxmVqe+NoUpWiqVPYwixk9+gPTA007sFJphnd2YOzXAjxfIMzadxcpvBAGNUkKFRgiF5VCuzR0Rf96I0w4aHe3JXDwDHSlBZ813C9JrGdxYBeGEMPb47wD3ZUbtr/OZcufmaLalBPViDYV3ZGaj7AEyKxnYmdBodj50n+jzjoRUkFV5ouTGW6SdBa8l+4UoRDHhZRYhBO6cCcTNM1IpQ0HoAAv5dK8SF9e+k1kbkjzYKHm0LZXbXIWLI2ZJO/5Jb9uM3KUcd2o9ht9frurPHESqzlZ/RSw8RilEIMIqFoBL/INbTD0LF8PhRMTx+VAyPHxXD44dk6P9QhmjA9duiMUffHkLr+8GB6LujkXk5Pc+02FTf99Df/wYIh61JqxfsclxCHEcdPwZHlsoGg4s4kfJlh7ENu8J0nR4TRWg1WVwo6O8o2ucBpODXMaUJqb7xwfauOU6GSiyf6izLxbEylJ7GXfm+x8pQxrbEUaWbcZwMNSjavTN250gZopAP0+bTjljdI2WowR4w2tQZ3hzsaPfRMoSD/ikAF62dmsqxMqTpSpZlfcC7frwMY516d6ljZvgx/EiGCXNpF8MPWFZ7tb/E7k+mNalfNm4+QTJB7WAa2DaO2rSNIW01puHNeGP76X3Ljiu0aK5lWYLWgCFt+EE8Zb9Mo0ubF0yKQ4gsN950BMP1ZIrRFoak6WHLuX46fbpb91uhBbN9DBGe9lh9NJV1Pi3rfNAnwppLHokAtb5q5xHriV85ic1MPH8CLFnEJEUuB3ATQwSnL6d0l7lttus0hvupZWeyjfFyDUCTRxTUSanLsNxJBtIqaoNE58jwpCjlQh5/UVfTIXVrncyXNMDLpYgYSzDU7T4YJoIh2qA5Tw5VPbgEjVoCZgO8lQpyQwqRcaJBIs+weQ21DQyRbaTzJU2ZMphgqI+Bn0lLbIMXlaK+zEu/rPmNsHAMNG3kLW+RP0m8qnvRFTSKQGF4JxhC6zQbNSGhMkRuNvU1KqMEPujznJzT6JFgXIIij8slL/RUjSGwRJyNYcF8hlC7TESep5unMIShbDyZhEqghUzwReHG4CWR6VkE0BPPVj1HSBD3X6LQz5xRCl3ZJNMnaylNAFFTJARDaA/5iDDA6/39SUM8tHHJa7OUWVpP5ZjWjRIHiekdsfZ1laAWRwQJRi85pw+h9VSXLeq4g2m47F4qYUeCIVmXfd4Zb6GFMbbnPFlPJMiiF/G+THDXcpdu60S+waI5QVHNIhywuZYELb4s1O/iMOgchvL8pObplCgEEOkIBy0xWiVDPv5MMMcshlUMW5bDqSx5tBTUkQ6tnvK6Smyr8PQ3MuOEZQRlGHQcwpRlqDinTCBORSCN/52Rh5CXpLmvrKD+Jg4qiBlO1KRg9g5hV9AeTgpGfdFniWrkUVZKrD4Ls8nMQ6Qc1Jbwa2QYipLKMiwnesOJQ+VFdxlKhqw4sKHWfi0+E+WyafT5SxeB3g12K9uH+j+5OkAOQ33Cnclz+SbEyhkzVBZSdd1UX+Mu38I2inytaZ+ywa4kBQ02MITaQiRiJ51v2T5k3ZNIsBMZQEYnYigGafNaqU3NuS6z1sgUICYvhC4nuifLECtSZitDof/VlSxQiHnivR9NMHQhmHTV2laCuRhgBQAxr344iUPmNZZxXBPqeGYeiuwPkbO/keEzH48dHcY2GIS2IyY6VRYhfhLSI3F2glRIimbJxs3vJZcCQUc2PtOHsuPrd9ZWhmIlM09eestxSOC+vHKCpkEVfimdakqiuqYaAO1dXsxtQAGvP2YkXlzjTaxqGYbiAIv6Gm9nKAaa6YuQUaG+xNJINQAStSlH+hkF02SjauAbX+3i7BzeSBm6mxmlUq1rLpK1pRmu+nkGAy9zGSkU6pq5iWHBfPwYorlNqiVCjx0EYA69jX0opWjTST45w9BJmXwSbXCdFa4HYQi9GuNEzWAhm4ZX0jjYwnChbR2lq75gmLA+iG3rcwv4I6O0FEMijph0omlAkMtyRQxk56EYpfXr7fNwJVR76gjxG81mw6AT0qDnifHnKwy9A8xDZZQMJ0gID7XpWWkRykVux1rKZfvwn2DZnbxdXl6+TXrzgafJYHJoGXItVaWFTBMqtZZSCch0h/oDFgu0qmRlJb4t3/p2eSh625iskK4R24lUkApOP7Q81JRpBQJxhIo68PN0GsFwvFWnQTO+jEWpfvme3sPqNBEDfvYN6TiWBJOoMkcvXQuzvbNdp5H6w+aZBPlQJrqdUkg5+WdX+MBOcHut6XC3BpjlM2Sqqphe6eN1s7ZF8vSCXEjbIuGTkZpTWvv9e/CVQxxXVn9KnCqYtYClCPP7ypqh/RYaJ2d4xTib/kbPZ8I+lDlQ0oApYx/yygwu5vPmw1Ybn6pe8dwimrUlj7dKW8A1Y20lU2ag2AaBio3f1bmNrxwW3ipu4zMoR4/HVdr5ckkY6so51zXwYse7LvY/0mktvRjCZWWcjqmjBsE45dgK5j1em63U1vNoIWTJMKV9HDQtTf0IUulOMxQmo+Jrqw2B0+r1XtbqQYmCIRInNFA97Z9wMA2C6WDcinZg+GyHLwrFh8kydCdP+/G1SRJvqv6YEgG5HmHFXxptywA/4QKXfYgvpfIduUIjpSba0QEz4S8168lCqv/0tOwspEj4nNupKnMZ4jf1xJwMpEeYDMHE/o1JT+xjhThDum5uOm+xXcbnrZDwnuRLA5PkqMjdmYHWa9ZskIdoKl590vr0kZ4ZhlT52bRvEe6hB2mD/1HGfeql5e89QauR3mvwzfkpF3/Kzow+9fPPD1IY0v2pPEPLL+NmS7IIpEy6T/8mGT4o4xfhvrpVQSbjm4XvuJMnsbtmvSU2NeLyZL6pS7Zur9OF6P7haG8RD/JI4MxbU5J7+0mJFq7pvm69Xa8bdMOWLPJzXjLpcUHy9GDa8jYtf99Lth5qY7oHzAq14z3gPQaMQ41t1k/TZxdrcsN/mlrVkDbtvt09PD1c9LuBptNagrhkOnoKaUH38oG/qdOH326QOeuanjItCjUe3kiV+w1ZYd6+vOAA/lNOLAa5gy1MM5SZpGQuw0wV5B4OpjOCQUAkeP5zyE1sTwezwdTGMBsi8kX4ePALZIekbk3vjbS5vHdUoUKFChUqVKhQoUKFb4vvqcDzE4b2cMoQ9M5yAsq/FNFpVWeDXzdX/xL899fsbISKf4wXerdgEXyjXHxiFtrj/jlI4rw1LdoP8IxW0PouH76DyHPT7Bjei8azo5vIvezu2R1SCFC3Wvn0KK6LdoLuRn9/u0+XVjEgfLOZH0HhSAWdfZhs8cXfnYb201aCxRlq+oxV4XwpR+RwKq/v1+eLxeL8fbgnhhoKblkli9nXcUTh//7tPtN8Lg9TiUGP17VnVyIWblgq6ss65/UsBl92KAmKpbv6OUaIVt6Ctey2VDwNwnIRO3/+VmfVxPIMpDLKCtQDXTngb91NX5b8AkDMWnVVdiNfD14lR0AT5752ZRWneXOGRT9SIoFwR125nBKnopYFDWI4w/xIW9agx/KtSYxUOlhvzuAXjFYIdRz2ffAQb85Bi4mQfezkQz14TwrZ81+jst+X+Os2wLM/8ebaexxc+8zGVOl4mgg5ipMTlvtGyN+AfkO2KwTXbRzIylpU8POHOc+YXqc5Djuht303bC9Pjj6Ru1Cey74mwIbVPgYpexLupikSkn3X0jJfQd4f6NxTei9CfF46HMVXV3uIGBJPQ/Yiy5HMyZsAH+IL44Sd7g1aKbX7neV5o2V8vZeAGgGExsMsQwLfcckivscBSzd78WPXyTypywMj9fhtv+/bfN1iqj057gDvYQs62sn2ZvPFa/YZC5Gozwfp894NdKjbneyTBa7//LK9+GuiBeom3HTo2b/+vOdWfvssJzyzz98Psc5B/TE7eJJv+qob2NGg/WCHRgXJsLSn3avcqU7hd7GyqMD4PP/ZYXwsCM52cCR4WHS6s4HtiXAUmIGIPfHs6azbWTxsqc6/8VQ1CtrR3cx3dfbIcdrf0hwFt+/v/Za7XD4PghFN1pYY2dNwuXRvOufvtzur6Y2SEomJ+wOeMUlDlLbNx3wMVfzFn3WtlMRln4foHtYPiNBoi4tvf8gzSlHkJFscbIxyEH3D3T3AysGZ5Z21A+l6ZJTyXnyUI5mQ/zscvdsbO9dKQwH99bMOekWrkbtxhS+D16vBJp8JuqIE96iQ7gCx3Iju/xcrxwdwe/XsbVToIb4FF/v7xNzHSBIDZ+nkqFmFcH5D1b9tY3Dpep+/nUJdKIPWeWl6HdfGO1Whr3LdUsXLWraKj9d+N9irhXII0E1oiMPuX689tzdLm35t+1uzE6A0kT1wOx9Qx4hat+jOAq30h1M/H2TIrlba6HHg3lx1nOuHV2XwDv3ba6fz759fs8czvFqV/rDRVyIOnVhB7HkjBZ6HIYumOF5uSWRNp69uUYUKFSpUqFChQoUKFSpUqFChQoUKFSpU+Fn4PwG8cQ3JxshdAAAAAElFTkSuQmCC" },
];

export function SectionPelicula (){

    const sliderItems = [
        {
            image: "https://www.oscars.org/sites/oscars/files/1943_iconic_acting_lukas_jones_paxinou_coburn_2.jpg",
            DC: "Referente de los Óscars",
            informacion: "Ganadora de 3 premios Óscars de la Academia de Cine de Hollywood, como mejor película, mejor director y mejor guión adaptado. Considerada por muchos como una de las mejores películas de Hollywood y del mundo."
        },
        {
            image: "http://www.alucine.es/wp-content/uploads/2014/10/311.jpg",
            DC: "La censura",
            informacion: "La película sufrió censura en España y no fue estrenada hasta 1946, además de eliminar referencias a la Guerra Civil española, siendo perjudicada por el Franquismo."
        },
        
    ];

    
    return(
        <section className="SectionPelicula">
            <Header/>
            <TituloPelicula/>
            <Descripcion/>
            <DondeVerlo platforms={plataformas} />;
            <SliderDC items={sliderItems} />
        </section>
    )
}
---
author: yearluk
origin: scratch
comments: true
date: 2011-04-29T14:34:08+00:00
lastMod: 2021-09-21T02:22:00+01:00
draft: false
layout: post
slug: states-provinces-codes-conflicts
title: US State/ Canadian Province Country Code Conflicts
wordpress_id: 1366
categories:
- Reference
- Tech
tags:
- ISO
---

Pretty sure most everyone, especially Canadians, are aware that ISO country codes express in ISO 3166 oftentimes conflict with standard US State (and Canadian Province) codes.

Lo! Those conflicts and the Alpha-3 codes to avoid this.

(Psst, ISO... can you please asign `UK` either to Ukraine or the United Kingdom of Great Britain and Northern Ireland? Thanks! `UA` and `GB` respecively does no one any favors.)

### 2021-09-21 Update
The below is a markdown table, the original was in XML (for 'twas the fasion back then... TEN YEARS ago!) converted using the really-quite-handy [https://tableconvert.com](https://tableconvert.com)

At some point, since we're Hugo-ifying all the things, I should look at use of the `/data/` directory and include the data programmatically.

Err. Maybe not. Seems like the dir is supposed to be used for site specific stuffs, and not content *per se*.

-[https://gohugo.io/templates/data-templates/](https://gohugo.io/templates/data-templates/)

-----
-----
-----

| Code   | State/Province            | Abbrev. | USPS Alpha code |  ISO 3166-1 alpha-2 Conflict | Flag |  ISO 3166-1 alpha-3 |
|--------|---------------------------|--------------|-----------------|--------------------------------------|------|---------------------|
|        |                           |              |                 |                                      |      |                     |
| USA-1  | Alabama                   | Ala.         | AL              | Albania                              | 🇦🇱 | ALB                 |
| USA-2  | Alaska                    |              | AK              |                                      |      |                     |
| USA-3  | Arizona                   | Ariz.        | AZ              | Azerbaijan                           | 🇦🇿 | AZE                 |
| USA-4  | Arkansas                  | Ark.         | AR              | Argentina                            | 🇦🇷 | ARG                 |
| USA-5  | California                | Calif.       | CA              | Canada                               | 🇨🇦 | CAN                 |
| USA-6  | Colorado                  | Colo.        | CO              | Colombia                             | 🇨🇴 | COL                 |
| USA-7  | Connecticut               | Conn.        | CT              |                                      |      |                     |
| USA-8  | Delaware                  | Del.         | DE              | Germany                              | 🇩🇪 | DEU                 |
| USA-9  | District of Columbia      | D.C.         | DC              |                                      |      |                     |
| USA-10 | Florida                   | Fla.         | FL              |                                      |      |                     |
| USA-11 | Georgia                   | Ga.          | GA              | Gabon                                | 🇬🇦 | GAB                 |
| USA-12 | Hawaii                    |              | HI              |                                      |      |                     |
| USA-13 | Idaho                     |              | ID              | Indonesia                            | 🇮🇩 | IDN                 |
| USA-14 | Illinois                  | Ill.         | IL              | Israel                               | 🇮🇱 | ISR                 |
| USA-15 | Indiana                   | Ind.         | IN              | India                                | 🇮🇳 | IND                 |
| USA-16 | Iowa                      |              | IA              |                                      |      |                     |
| USA-17 | Kansas                    | Kans.        | KS              |                                      |      |                     |
| USA-18 | Kentucky                  | Ky.          | KY              | Cayman Islands                       | 🇰🇾 | CYM                 |
| USA-19 | Louisiana                 |              | LA              | Lao PDR (Laos)                       | 🇱🇦 | LAO                 |
| USA-20 | Maine                     | Me.          | ME              | Montenegro                           | 🇲🇪 | MNE                 |
| USA-21 | Maryland                  | Md.          | MD              | Moldova                              | 🇲🇩 | MDA                 |
| USA-22 | Massachusetts             | Mass.        | MA              | Morocco                              | 🇲🇦 | MAR                 |
| USA-23 | Michigan                  | Mich.        | MI              |                                      |      |                     |
| USA-24 | Minnesota                 | Minn.        | MN              | Mongolia                             | 🇲🇳 | MNG                 |
| USA-25 | Mississippi               | Miss.        | MS              | Montserrat                           | 🇲🇸 | MSR                 |
| USA-26 | Missouri                  | Mo.          | MO              | Macau, SAR China                     | 🇲🇴 | MAC                 |
| USA-27 | Montana                   | Mont.        | MT              | Malta                                | 🇲🇹 | MLT                 |
| USA-28 | Nebraska                  | Nebr.        | NE              | Niger                                | 🇳🇪 | NER                 |
| USA-29 | Nevada                    | Nev.         | NV              |                                      |      |                     |
| USA-30 | New Hampshire             | N.H.         | NH              |                                      |      |                     |
| USA-31 | New Jersey                | N.J.         | NJ              |                                      |      |                     |
| USA-32 | New Mexico                | N.Mex.       | NM              |                                      |      |                     |
| USA-33 | New York                  | N.Y.         | NY              |                                      |      |                     |
| USA-34 | North Carolina            | N.C.         | NC              | New Caledonia                        | 🇫🇷 | NCL                 |
| USA-35 | North Dakota              |              | ND              |                                      |      |                     |
| USA-36 | Ohio                      |              | OH              |                                      |      |                     |
| USA-37 | Oklahoma                  | Okla.        | OK              |                                      |      |                     |
| USA-38 | Oregon                    | Ore.         | OR              |                                      |      |                     |
| USA-39 | Pennsylvania              | Penn.        | PA              | Panama                               | 🇵🇦 | PAN                 |
| USA-40 | Rhode Island              | R.I.         | RI              |                                      |      |                     |
| USA-41 | South Carolina            | S.C.         | SC              | Seychelles                           | 🇸🇨 | SYC                 |
| USA-42 | South Dakota              |              | SD              | Sudan                                | 🇸🇩 | SDN                 |
| USA-43 | Tennessee                 | Tenn.        | TN              | Tunisia                              | 🇹🇳 | TUN                 |
| USA-44 | Texas                     | Tex.         | TX              |                                      |      |                     |
| USA-45 | Utah                      |              | UT              |                                      |      |                     |
| USA-46 | Vermont                   | Vt.          | VT              |                                      |      |                     |
| USA-47 | Virginia                  | Va.          | VA              | Vatican City                         | 🇻🇦 | VAT                 |
| USA-48 | Washington                | Wash.        | WA              |                                      |      |                     |
| USA-49 | West Virginia             | W.Va.        | WV              |                                      |      |                     |
| USA-50 | Wisconsin                 | Wis.         | WI              |                                      |      |                     |
| USA-51 | Wyoming                   | Wyo.         | WY              |                                      |      |                     |
|        |                           |              |                 |                                      |      |                     |
| CAN-1  | Alberta                   |              | AB              |                                      |      |                     |
| CAN-2  | British Columbia          |              | BC              |                                      |      |                     |
| CAN-3  | Manitoba                  |              | MB              |                                      |      |                     |
| CAN-4  | New Brunswick             |              | NB              |                                      |      |                     |
| CAN-5  | Newfoundland and Labrador |              | NL              | Netherlands                          | 🇳🇱 | NLD                 |
| CAN-6  | Northwest Territories     |              | NT              |                                      |      |                     |
| CAN-7  | Nova Scotia               |              | NS              |                                      |      |                     |
| CAN-8  | Nunavit                   |              | NU              | Niue                                 | 🇳🇺 | NIU                 |
| CAN-9  | Ontario                   |              | ON              |                                      |      |                     |
| CAN-10 | Prince Edward Island      |              | PE              | Peru                                 | 🇵🇪 | PER                 |
| CAN-11 | Quebéc                    |              | QC              |                                      |      |                     |
| CAN-12 | Saskatchewan              |              | SK              | Slovakia                             | 🇸🇰 | SVK                 |
| CAN-13 | Yukon                     |              | YT              | Mayotte                              | 🇫🇷 | MYT                 |

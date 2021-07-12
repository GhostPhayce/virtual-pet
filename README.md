<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <h1 style="text-transform: uppercase;">Virtual Pet</h1>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#install">Install</a></li>
        <li><a href="#create-a-pet">Create a Pet</a></li>
      </ul>
    </li>
    <li>
      <a href="#available-functions">Available functions!</a>
    </li>
  </ol>
</details>
<br />

## About The Project
This was created as part of an introduction to JavaScript as part of a bootcamp with Manchester Codes. 
<br />
<br />

## Getting Started

### Install
  ```
  npm install
  ```
### Create a Pet
1. Open your terminal and enter Node REPL
    ```
    node
    ```
2. Import the pet constructor
    ```
    .load src/pet.js
    ```
3. Create a new pet
    ```
    const brian = new Pet("Brian")
    ```

## Available functions!
* Check the status of your pet!
    ```
    brian.checkUp()
    ```
* Feed your pet!
    ```
    brian.feed()
    ```
* Walk your pet!
    ```
    brian.walk()
    ```
* Age your pet!
    ```
    brian.growUp()
    ```

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/GhostPhayce/virtual-pet.svg?style=for-the-badge
[contributors-url]: https://github.com/GhostPhayce/virtual-pet/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GhostPhayce/virtual-pet.svg?style=for-the-badge
[forks-url]: https://github.com/GhostPhayce/virtual-pet/network/members
[stars-shield]: https://img.shields.io/github/stars/GhostPhayce/virtual-pet.svg?style=for-the-badge
[stars-url]: https://github.com/GhostPhayce/virtual-pet/stargazers
[issues-shield]: https://img.shields.io/github/issues/GhostPhayce/virtual-pet.svg?style=for-the-badge
[issues-url]: https://github.com/GhostPhayce/virtual-pet/issues
[license-shield]: https://img.shields.io/github/license/GhostPhayce/virtual-pet.svg?style=for-the-badge
[license-url]: https://github.com/GhostPhayce/virtual-pet/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/thomas-ramsden-95894013b
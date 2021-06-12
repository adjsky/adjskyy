const React = require("react")
require("./pageFooter.css")
const ContactsSepImg = require("../../assets/separator.png")

function PageFooter() {
  return (
    <footer className="page-footer">
      <small className="page-footer_copyright">COPYRIGHT 2021 adjsky</small>
      <ul className="page-footer_contacts">
        <li><a href="https://vk.com/wannabe2dxd" target="_blank" rel="noreferrer">vk</a></li>
        <li><img src={ContactsSepImg} alt="" /></li>
        <li><a href="https://github.com/adjsky/" target="_blank" rel="noreferrer">github</a></li>
      </ul>
    </footer>
  )
}

module.exports = PageFooter

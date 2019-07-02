import React from "react"
import {FaTwitter, FaInstagram} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

function isTwitterLink(string) {
  const regExp = /http(s)?:\/\/(.*\.)?twitter\.com\/[A-z0-9_]+\/?/gm
  return regExp.test(string)
}
function isFacebookLink(string) {
  const regExp = /http(s)?:\/\/(www\.)?(facebook|fb)\.com\/[A-z0-9_\-\.]+\/?/gm
  return regExp.test(string)
}

function isInstagramLink(string) {
  const regExp = /https?:\/\/(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/gm
  return regExp.test(string)
}

function random(string) {

  switch (true) {
    case(isTwitterLink(string)):
      {
        return <FaTwitter/>
      }
    case(isFacebookLink(string)):
      {
        return <FaFacebook/>
      }
    case(isInstagramLink(string)):
      {
        return <FaInstagram/>
      }
    default:
      return <FaFacebook/>
  }
}

const ReturnComponent = ({link}) => (random(link))
export default ReturnComponent
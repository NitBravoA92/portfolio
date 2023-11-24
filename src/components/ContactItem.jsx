const ContactItem = ({link, icon}) => {
  return (
    <li>
      <a href={link} className="contact-item">
        {icon}
      </a>
    </li>
  );
}

export default ContactItem;

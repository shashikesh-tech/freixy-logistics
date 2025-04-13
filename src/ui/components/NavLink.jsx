export default function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-white hover:text-[#d53503]">
      {children}
    </Link>
  );
}

import { personalData as p } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {p.name}. All rights reserved.</span>
        <span>{p.location}</span>
      </div>
    </footer>
  );
}

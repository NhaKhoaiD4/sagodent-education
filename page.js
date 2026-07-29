"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const courses = [
    {
        tab: "VENEER",
        title: "THE VENEER WORKFLOW",
        image: "./asset-01-1920x1080.jpg",
        intro: "Quy trình veneer tinh gọn từ lập kế hoạch, sửa soạn, lấy dấu kỹ thuật số đến gắn hoàn tất — tập trung vào tính tiên lượng và ứng dụng lâm sàng.",
        topics: ["Digital planning", "Mock-up", "Preparation control"],
    },
    {
        tab: "BOPT",
        title: "BOPT MASTERCLASS",
        image: "./asset-10-1920x1080.jpg",
        intro: "Kiểm soát mô mềm và đường hoàn tất theo quy trình thực hành trực quan, có thể áp dụng ngay tại phòng khám.",
        topics: ["Biologically oriented", "Tissue control", "Clinical protocol"],
    },
    {
        tab: "IMPLANT CĂN BẢN",
        title: "IMPLANT FOUNDATION",
        image: "./asset-09-6000x6000.jpg",
        intro: "Xây dựng nền tảng cấy ghép vững chắc, từ đọc dữ liệu CBCT đến lập kế hoạch và thao tác trên mô hình chuyên biệt.",
        topics: ["CBCT planning", "Surgical protocol", "Hands-on model"],
    },
    {
        tab: "ALL ON 4",
        title: "FULL-ARCH ALL-ON-4",
        image: "./asset-03-6240x4160.jpg",
        intro: "Tiếp cận toàn bộ dòng chảy điều trị phục hình toàn hàm với tư duy số hóa, tối giản và tiên lượng.",
        topics: ["Full-arch planning", "Guided surgery", "Provisional workflow"],
    },
];
const differences = [
    {
        number: "01",
        title: "Đào tạo bắt đầu từ những lỗi cơ bản",
        text: "Mỗi học viên không chỉ học “phải làm gì”, mà được huấn luyện để nhận ra vì sao mình làm chưa đúng. Huấn luyện viên quan sát trực tiếp, chỉnh sửa ngay từ cách cầm dụng cụ, tư thế, thao tác đến xử lý tình huống.",
        image: "./asset-07-6240x4160.jpg",
    },
    {
        number: "02",
        title: "Mô phỏng như một ca lâm sàng thực sự",
        text: "Môi trường đào tạo tái hiện toàn bộ quy trình của một phòng khám hiện đại: chẩn đoán, lập kế hoạch, Cone Beam CT, phòng điều trị, labo và công nghệ nha khoa số.",
        image: "./asset-08-4160x6240.jpg",
    },
    {
        number: "03",
        title: "Mô hình thực hành được thiết kế riêng",
        text: "Mỗi chương trình có mô hình chuyên biệt, tái hiện đúng những khó khăn trong thực tế để học viên lặp lại thao tác đến khi đạt độ chính xác và ổn định.",
        image: "./asset-09-6000x6000.jpg",
    },
];
function Logo({ footer = false }) {
    return (_jsx("a", { className: `logo ${footer ? "logo-footer" : ""}`, href: "#top", "aria-label": "Sagodent", children: _jsx("img", { src: "./logo-white.png?v=2", alt: "Sagodent - Dental education center" }) }));
}
export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeCourse, setActiveCourse] = useState(0);
    const course = courses[activeCourse];
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting)
                entry.target.classList.add("revealed");
        }), { threshold: 0.12 });
        elements.forEach(el => observer.observe(el));
        const progress = () => {
            const max = document.documentElement.scrollHeight - innerHeight;
            document.documentElement.style.setProperty("--scroll", `${max ? scrollY / max : 0}`);
        };
        progress();
        addEventListener("scroll", progress, { passive: true });
        return () => {
            observer.disconnect();
            removeEventListener("scroll", progress);
        };
    }, []);
    const moveCourse = (step) => setActiveCourse(current => (current + step + courses.length) % courses.length);
    return (_jsxs("main", { id: "top", children: [_jsx("div", { className: "scroll-progress" }), _jsxs("header", { className: "topbar", children: [_jsx(Logo, {}), _jsxs("div", { className: "header-actions", children: [_jsxs("span", { className: "language", children: ["VN ", _jsx("i", {}), " ENG"] }), _jsxs("button", { className: "menu-button", onClick: () => setMenuOpen(!menuOpen), children: ["M\u1EE4C CH\u00CDNH ", _jsx("span", { children: menuOpen ? "X" : "III" })] })] })] }), _jsx("nav", { className: `menu-panel ${menuOpen ? "open" : ""}`, children: ["GIỚI THIỆU", "KHÓA HỌC", "THƯ VIỆN", "ID4 CENTER", "LIÊN HỆ"].map((item, index) => (_jsxs("a", { href: ["#intro", "#courses", "#library", "#id4", "#contact"][index], onClick: () => setMenuOpen(false), children: [_jsxs("small", { children: ["0", index + 1] }), item, _jsx("span", { children: "\u2197" })] }, item))) }), _jsxs("section", { className: "hero", children: [_jsx("div", { className: "hero-image" }), _jsx("div", { className: "hero-glow" }), _jsxs("div", { className: "hero-copy", "data-reveal": true, children: [_jsx("p", { children: "KH\u00D3A H\u1ECCC N\u1ED4I B\u1EACT \u00B7 2026" }), _jsx("h1", { children: "THE VENEER" }), _jsx("em", { children: "WORKFLOW" }), _jsxs("span", { children: ["From preparation", _jsx("br", {}), "to predictable beauty."] }), _jsxs("a", { className: "pill light", href: "#courses", children: ["Tham gia ngay ", _jsx("b", { children: "\u2197" })] })] }), _jsxs("div", { className: "scroll-hint", children: ["CU\u1ED8N \u0110\u1EC2 KH\u00C1M PH\u00C1 ", _jsx("span", { children: "\u2193" })] })] }), _jsxs("section", { className: "intro", id: "intro", children: [_jsx("div", { className: "intro-photo parallax-photo", "data-reveal": true }), _jsx("div", { className: "intro-copy", "data-reveal": true, children: _jsxs("h2", { children: ["\u0110\u00E0o t\u1EA1o nh\u1EEFng k\u1EF9 n\u0103ng", _jsx("br", {}), "c\u00F3 th\u1EC3 ", _jsx("em", { children: "\u1EE9ng d\u1EE5ng ngay" })] }) })] }), _jsxs("section", { className: "doctor", children: [_jsxs("div", { className: "doctor-copy", "data-reveal": true, children: [_jsx("p", { className: "kicker", children: "NG\u01AF\u1EDCI S\u00C1NG L\u1EACP & GI\u00C1M \u0110\u1ED0C" }), _jsx("h2", { children: "Dr. Diem Le" }), _jsx("p", { className: "doctor-role", children: "iD-4 Guide Center \u00B7 Nha khoa L\u00EA Ho\u00E0ng \u00B7 Nha khoa iD-4" }), _jsx("p", { className: "doctor-lead", children: "V\u1EDBi h\u01A1n 30 n\u0103m kinh nghi\u1EC7m l\u00E2m s\u00E0ng, Dr. Diem Le l\u00E0 chuy\u00EAn gia h\u00E0ng \u0111\u1EA7u trong l\u0129nh v\u1EF1c c\u1EA5y gh\u00E9p Implant nha khoa v\u00E0 ph\u1EE5c h\u00ECnh to\u00E0n h\u00E0m, \u0111\u00E3 \u0111i\u1EC1u tr\u1ECB th\u00E0nh c\u00F4ng cho nhi\u1EC1u ca m\u1EA5t r\u0103ng ph\u1EE9c t\u1EA1p." }), _jsxs("div", { className: "doctor-columns", children: [_jsx("p", { children: "B\u00E1c s\u0129 ti\u00EAn phong \u1EE9ng d\u1EE5ng quy tr\u00ECnh k\u1EF9 thu\u1EADt s\u1ED1 theo h\u01B0\u1EDBng t\u1ED1i gi\u1EA3n, k\u1EBFt h\u1EE3p ho\u1EA1t \u0111\u1ED9ng c\u00F4ng ngh\u1EC7 hi\u1EC7n \u0111\u1EA1i trong t\u1EEBng giai \u0111o\u1EA1n \u0111i\u1EC1u tr\u1ECB. T\u1EEB kh\u00E2u th\u0103m kh\u00E1m, thu th\u1EADp d\u1EEF li\u1EC7u, l\u1EADp k\u1EBF ho\u1EA1ch \u0111\u1EBFn ph\u1EABu thu\u1EADt v\u00E0 ph\u1EE5c h\u00ECnh \u0111\u1EC1u \u0111\u01B0\u1EE3c ki\u1EC3m so\u00E1t ch\u1EB7t ch\u1EBD." }), _jsx("p", { children: "Hi\u1EC7n l\u00E0 gi\u1EA3ng vi\u00EAn th\u1EC9nh gi\u1EA3ng t\u1EA1i Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y D\u01B0\u1EE3c C\u1EA7n Th\u01A1, \u0111\u1ED3ng th\u1EDDi l\u00E0 b\u00E1o c\u00E1o vi\u00EAn t\u1EA1i c\u00E1c h\u1ED9i ngh\u1ECB khoa h\u1ECDc nha khoa trong n\u01B0\u1EDBc v\u00E0 qu\u1ED1c t\u1EBF; l\u00E0 KOL v\u00E0 \u0111\u1ED1i t\u00E1c chuy\u00EAn m\u00F4n c\u1EE7a Medit, Osstem Implant v\u00E0 Dentium Implant." })] })] }), _jsx("div", { className: "doctor-portrait", "data-reveal": true, children: _jsx("img", { src: "./asset-06-890x2014.png", alt: "Dr. Diem Le" }) })] }), _jsxs("section", { className: "difference", children: [_jsxs("div", { className: "difference-head", children: [_jsx("img", { src: "./asset-03-6240x4160.jpg", alt: "" }), _jsxs("div", { "data-reveal": true, children: [_jsx("p", { className: "kicker", children: "PH\u01AF\u01A0NG PH\u00C1P \u0110\u00C0O T\u1EA0O" }), _jsxs("h2", { children: ["\u0110i\u1EC1u g\u00EC t\u1EA1o n\u00EAn", _jsx("br", {}), _jsx("em", { children: "s\u1EF1 kh\u00E1c bi\u1EC7t?" })] })] })] }), _jsx("div", { className: "difference-list", children: differences.map((item, index) => (_jsxs("article", { className: `difference-row ${index % 2 ? "reverse" : ""}`, children: [_jsxs("div", { className: "difference-text", "data-reveal": true, children: [_jsx("span", { children: item.number }), _jsx("h3", { children: item.title }), _jsx("p", { children: item.text })] }), _jsx("figure", { className: "difference-image", "data-reveal": true, children: _jsx("img", { src: item.image, alt: item.title }) })] }, item.number))) }), _jsxs("blockquote", { "data-reveal": true, children: ["\u201CK\u1EF9 n\u0103ng ch\u1EC9 \u0111\u01B0\u1EE3c h\u00ECnh th\u00E0nh khi ng\u01B0\u1EDDi h\u1ECDc \u0111\u01B0\u1EE3c s\u1EEDa \u0111\u00FAng nh\u1EEFng l\u1ED7i nh\u1ECF nh\u1EA5t.\u201D", _jsx("p", { children: "T\u1EA1i Sagodent, ch\u00FAng t\u00F4i kh\u00F4ng ch\u1EC9 truy\u1EC1n \u0111\u1EA1t ki\u1EBFn th\u1EE9c m\u00E0 c\u00F2n hu\u1EA5n luy\u1EC7n n\u0103ng l\u1EF1c th\u1EF1c h\u00E0nh, b\u1EDFi ch\u00FAng t\u00F4i tin r\u1EB1ng k\u1EF9 n\u0103ng ch\u1EC9 \u0111\u01B0\u1EE3c h\u00ECnh th\u00E0nh khi ng\u01B0\u1EDDi h\u1ECDc \u0111\u01B0\u1EE3c s\u1EEDa \u0111\u00FAng nh\u1EEFng l\u1ED7i nh\u1ECF nh\u1EA5t, trong m\u1ED9t m\u00F4i tr\u01B0\u1EDDng m\u00F4 ph\u1ECFng s\u00E1t v\u1EDBi th\u1EF1c t\u1EBF nh\u1EA5t." })] })] }), _jsxs("section", { className: "courses", id: "courses", children: [_jsx("header", { "data-reveal": true, children: _jsxs("h2", { children: ["C\u00E1c kh\u00F3a h\u1ECDc t\u1EA1i ", _jsx("em", { children: "Sagodent" })] }) }), _jsx("div", { className: "course-tabs", role: "tablist", children: courses.map((item, index) => (_jsx("button", { className: index === activeCourse ? "active" : "", onClick: () => setActiveCourse(index), children: item.tab }, item.tab))) }), _jsxs("div", { className: "course-card", children: [_jsxs("div", { className: "course-visual", children: [_jsx("img", { src: course.image, alt: course.title }), _jsxs("div", { children: [_jsx("small", { children: "KH\u00D3A H\u1ECCC N\u1ED4I B\u1EACT \u00B7 2026" }), _jsx("h3", { children: course.title }), _jsx("em", { children: "From knowledge to practice." })] })] }), _jsxs("div", { className: "course-info", children: [_jsx("h3", { children: course.title }), _jsx("p", { children: course.intro }), _jsx("ol", { children: course.topics.map((topic, i) => _jsxs("li", { children: [_jsxs("span", { children: ["0", i + 1] }), topic] }, topic)) }), _jsxs("div", { className: "course-bottom", children: [_jsxs("a", { className: "pill blue", href: "#contact", children: ["Xem chi ti\u1EBFt ", _jsx("b", { children: "\u2197" })] }), _jsxs("div", { children: [_jsx("button", { onClick: () => moveCourse(-1), "aria-label": "Kh\u00F3a tr\u01B0\u1EDBc", children: "\u2039" }), _jsx("button", { onClick: () => moveCourse(1), "aria-label": "Kh\u00F3a sau", children: "\u203A" })] })] })] })] }, activeCourse)] }), _jsxs("section", { className: "library", id: "library", children: [_jsx("header", { "data-reveal": true, children: _jsxs("h2", { children: ["Ki\u1EBFn th\u1EE9c \u0111\u01B0\u1EE3c", _jsx("br", {}), _jsx("em", { children: "chia s\u1EBB" })] }) }), _jsx("div", { className: "library-grid", children: [
                            ["Digital implant workflow:", "từ dữ liệu đến kết quả lâm sàng"],
                            ["Hệ thống quản lý", "chất lượng & đăng ký ISO"],
                            ["Hành trình hơn 30 năm", "của Dr. Diem Le"],
                            ["Phóng sự truyền hình:", "đào tạo nha khoa thực hành"],
                        ].map((item, i) => _jsxs("a", { className: i === 0 ? "featured" : "", href: "#", "data-reveal": true, children: [_jsxs("h3", { children: [item[0], _jsx("br", {}), item[1]] }), _jsx("span", { children: "Xem th\u00EAm \u2197" })] }, item[0])) })] }), _jsxs("section", { className: "id4", id: "id4", children: [_jsx("img", { src: "./asset-05-1672x941.jpg", alt: "Trung t\u00E2m c\u1EA5y gh\u00E9p Implant ID4" }), _jsx("div", { className: "id4-overlay" }), _jsxs("div", { className: "id4-copy", "data-reveal": true, children: [_jsx("h2", { children: "Nha khoa iD-4" }), _jsx("h3", { children: "Trung t\u00E2m c\u1EA5y gh\u00E9p Implant chuy\u00EAn s\u00E2u" }), _jsx("p", { children: "\u0110\u01B0\u1EE3c th\u00E0nh l\u1EADp b\u1EDFi c\u00F9ng \u0111\u1ED9i ng\u0169 s\u00E1ng l\u1EADp Sagodent, trung t\u00E2m c\u1EA5y gh\u00E9p Implant ID4 ra \u0111\u1EDDi v\u1EDBi m\u1EE5c ti\u00EAu tr\u1EDF th\u00E0nh c\u01A1 s\u1EDF th\u1EF1c h\u00E0nh l\u00E2m s\u00E0ng chu\u1EA9n m\u1EF1c, n\u01A1i h\u1ED9i t\u1EE5 \u0111i\u1EC1u tr\u1ECB, nghi\u00EAn c\u1EE9u v\u00E0 \u0111\u00E0o t\u1EA1o chuy\u00EAn s\u00E2u v\u1EC1 Implant v\u00E0 ph\u1EE5c h\u00ECnh to\u00E0n h\u00E0m." }), _jsx("p", { children: "Sagodent \u0111\u00E0o t\u1EA1o t\u1EEB kinh nghi\u1EC7m th\u1EF1c ti\u1EC5n v\u00E0 ID4 t\u1EA1o ra kinh nghi\u1EC7m th\u1EF1c ti\u1EC5n. Hai h\u1EC7 sinh th\u00E1i c\u00F9ng chung m\u1ED9t tri\u1EBFt l\u00FD l\u1EA5y k\u1EBFt qu\u1EA3 \u0111i\u1EC1u tr\u1ECB v\u00E0 s\u1EF1 ph\u00E1t tri\u1EC3n c\u1EE7a b\u00E1c s\u0129 l\u00E0m gi\u00E1 tr\u1ECB c\u1ED1t l\u00F5i." }), _jsxs("a", { className: "pill outline", href: "https://id4implantcenter.vn/", target: "_blank", rel: "noreferrer", children: ["\u0110\u1EBFn website iD4 ", _jsx("b", { children: "\u2197" })] })] })] }), _jsxs("section", { className: "contact", id: "contact", children: [_jsxs("h2", { "data-reveal": true, children: ["S\u1EB5n s\u00E0ng \u0111\u1ED3ng h\u00E0nh", _jsx("br", {}), "c\u00F9ng ", _jsx("em", { children: "Sagodent?" })] }), _jsx("div", { className: "socials", children: ["WHATSAPP", "ZALO", "FACEBOOK", "INSTAGRAM"].map(item => _jsxs("a", { href: "#", children: [item, _jsx("span", { children: "\u2197" })] }, item)) })] }), _jsxs("footer", { children: [_jsx(Logo, { footer: true }), _jsxs("div", { children: [_jsx("small", { children: "\u0110\u1ECAA CH\u1EC8" }), _jsxs("p", { children: ["305 H\u00F9ng V\u01B0\u01A1ng, An \u0110\u00F4ng,", _jsx("br", {}), "H\u1ED3 Ch\u00ED Minh"] })] }), _jsxs("div", { children: [_jsx("small", { children: "LI\u00CAN H\u1EC6" }), _jsxs("p", { children: ["0909 245 886", _jsx("br", {}), "vu.le@sagodent.vn"] })] }), _jsxs("div", { children: [_jsx("small", { children: "GI\u1EDC L\u00C0M VI\u1EC6C" }), _jsxs("p", { children: ["Th\u1EE9 2 \u2013 Th\u1EE9 7", _jsx("br", {}), "08:30 \u2013 17:00", _jsx("br", {}), "Ch\u1EE7 nh\u1EADt: Ngh\u1EC9"] })] }), _jsxs("div", { children: [_jsx("small", { children: "THEO D\u00D5I" }), _jsxs("p", { children: ["WHATSAPP \u2197", _jsx("br", {}), "ZALO \u2197", _jsx("br", {}), "FACEBOOK \u2197", _jsx("br", {}), "INSTAGRAM \u2197"] })] }), _jsx("div", { className: "footer-mark", children: "\u2726" })] })] }));
}

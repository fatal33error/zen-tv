import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

new_header = """<!-- Unified TopNavBar -->
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-0 pt-0">
    <div id="nav-container" class="w-full mx-auto h-24 bg-black/60 backdrop-blur-2xl border-b border-white/10 flex justify-between items-center px-6 md:px-16 transition-all duration-500 ease-in-out">
        <a href="index.html" class="text-2xl font-black tracking-tighter text-white font-space-grotesk flex items-center gap-1 z-50">
            zen+ TV<span class="text-primary-fixed-dim text-4xl leading-none">.</span>
        </a>
        
        <nav class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a class="text-slate-300 font-medium hover:text-white transition-all duration-300 font-label-bold text-sm tracking-wide" href="index.html">Home</a>
            <a class="text-slate-300 font-medium hover:text-white transition-all duration-300 font-label-bold text-sm tracking-wide" href="channels.html">Channels</a>
            <a class="text-slate-300 font-medium hover:text-white transition-all duration-300 font-label-bold text-sm tracking-wide" href="pricing.html">Pricing</a>
            <a class="text-slate-300 font-medium hover:text-white transition-all duration-300 font-label-bold text-sm tracking-wide" href="contact.html">Contact</a>
        </nav>
        
        <div class="flex items-center gap-6 z-50">
            <div class="relative group cursor-pointer text-slate-300 font-medium hover:text-white transition-all duration-300 hidden md:block">
                <span class="flex items-center gap-1 font-label-bold text-sm tracking-wide">
                    <span class="material-symbols-outlined text-xl leading-none">language</span>
                    EN
                </span>
                <div class="absolute right-0 top-full pt-4 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div class="bg-surface-container-high border border-outline-variant/30 rounded-xl shadow-2xl py-2 backdrop-blur-xl">
                        <a class="block px-4 py-2 hover:bg-white/5 text-on-surface font-body-md text-sm transition-colors" href="#">English</a>
                        <a class="block px-4 py-2 hover:bg-white/5 text-on-surface font-body-md text-sm transition-colors" href="#">Français</a>
                        <a class="block px-4 py-2 hover:bg-white/5 text-on-surface font-body-md text-sm transition-colors" href="#">Español</a>
                    </div>
                </div>
            </div>
            <a href="free-trial.html" class="bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-bold text-sm shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:-translate-y-0.5 transition-all duration-300 inline-block">
                Start Trial
            </a>
        </div>
    </div>
</header>
"""

js_code = """
<!-- JS functionality for mobile nav, FAQ if needed, lang dropdown, and pill scroll effect -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const navHeight = document.querySelector('header').offsetHeight;
                    window.scrollTo({
                        top: target.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Pill shaped glass liquid header on scroll
        const header = document.getElementById('main-header');
        const navContainer = document.getElementById('nav-container');
        
        if (header && navContainer) {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    header.classList.add('px-4', 'md:px-8', 'pt-4');
                    header.classList.remove('px-0', 'pt-0');
                    
                    navContainer.classList.remove('w-full', 'h-24', 'bg-black/60', 'border-b', 'border-white/10', 'rounded-none');
                    navContainer.classList.add('max-w-5xl', 'h-16', 'bg-surface-container-lowest/70', 'backdrop-blur-3xl', 'border', 'border-white/10', 'rounded-full', 'shadow-[0_8px_32px_rgba(0,219,233,0.05)]');
                } else {
                    header.classList.remove('px-4', 'md:px-8', 'pt-4');
                    header.classList.add('px-0', 'pt-0');
                    
                    navContainer.classList.add('w-full', 'h-24', 'bg-black/60', 'border-b', 'border-white/10', 'rounded-none');
                    navContainer.classList.remove('max-w-5xl', 'h-16', 'bg-surface-container-lowest/70', 'backdrop-blur-3xl', 'border', 'border-white/10', 'rounded-full', 'shadow-[0_8px_32px_rgba(0,219,233,0.05)]');
                }
            };
            
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }
    });
</script>
</body>
"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Replace existing <nav> or <header> with unified header
    # Check if index.html
    if file == 'index.html':
        content = re.sub(r'<!-- TopNavBar -->.*?</header>', new_header, content, flags=re.DOTALL)
    elif file == 'free-trial.html':
        # Find <!-- Navigation Suppressed... -->
        content = re.sub(r'<!-- Navigation Suppressed.*?-->', new_header, content, flags=re.DOTALL)
        # Adjust main padding
        content = content.replace('<main class="relative z-10 flex-grow flex items-center py-section-gap', '<main class="relative z-10 flex-grow flex items-center pt-[160px] pb-section-gap')
    else:
        # others have <!-- TopNavBar --> ... </nav>
        content = re.sub(r'<!-- TopNavBar -->.*?</nav>', new_header, content, flags=re.DOTALL)
        
    # 2. Inject or replace existing script logic with new scroll effect
    if '<!-- JS functionality' in content:
        content = re.sub(r'<!-- JS functionality.*?</body>', js_code, content, flags=re.DOTALL)
    else:
        # inject before </body>
        content = content.replace('</body>', js_code)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f'Updated {file}')

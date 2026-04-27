import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

new_footer = """<!-- Footer -->
<footer class="w-full pt-20 pb-10 border-t border-white/5 bg-[#0a0a0c] text-white relative z-10">
    <div class="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="col-span-1">
            <div class="text-3xl font-black tracking-tighter text-white font-headline-lg mb-6 flex items-center">
                zen+ TV<span class="text-secondary-fixed-dim text-4xl leading-none">.</span>
            </div>
            <p class="font-body-md text-on-surface-variant text-sm leading-relaxed max-w-xs">
                The ultimate destination for limitless, high-definition entertainment across the globe.
            </p>
        </div>
        
        <!-- Quick Links -->
        <div class="col-span-1">
            <h4 class="font-label-bold text-white text-lg mb-6">Quick Links</h4>
            <div class="flex flex-col gap-4 font-body-md text-sm">
                <a href="index.html" class="text-on-surface-variant hover:text-white transition-colors">Home</a>
                <a href="pricing.html" class="text-on-surface-variant hover:text-white transition-colors">Pricing</a>
                <a href="#" class="text-on-surface-variant hover:text-white transition-colors">Installation Tutorials</a>
                <a href="#" class="text-on-surface-variant hover:text-white transition-colors">VOD Updates</a>
            </div>
        </div>
        
        <!-- Legal -->
        <div class="col-span-1">
            <h4 class="font-label-bold text-white text-lg mb-6">Legal</h4>
            <div class="flex flex-col gap-4 font-body-md text-sm">
                <a href="#" class="text-on-surface-variant hover:text-white transition-colors">Terms of Service</a>
                <a href="#" class="text-on-surface-variant hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" class="text-on-surface-variant hover:text-white transition-colors">Refund Policy</a>
            </div>
        </div>
        
        <!-- Secure Payments -->
        <div class="col-span-1">
            <h4 class="font-label-bold text-white text-lg mb-6">Secure Payments</h4>
            <div class="flex items-center gap-3">
                <!-- Visa -->
                <div class="bg-white/10 px-3 py-1.5 rounded flex items-center justify-center">
                    <span class="font-black text-white text-sm tracking-wider font-sans italic">VISA</span>
                </div>
                <!-- Mastercard -->
                <div class="bg-white/10 px-3 py-1.5 rounded flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full bg-red-500 opacity-90 relative z-10"></div>
                    <div class="w-4 h-4 rounded-full bg-yellow-500 opacity-90 -ml-2 relative z-20"></div>
                </div>
                <!-- PayPal -->
                <div class="bg-white/10 px-3 py-1.5 rounded flex items-center justify-center">
                    <span class="font-bold text-white text-sm italic font-sans tracking-tight">PayPal</span>
                </div>
                <!-- Bitcoin -->
                <div class="bg-white/10 px-3 py-1.5 rounded flex items-center justify-center">
                    <span class="font-bold text-white text-sm">₿</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bottom Bar -->
    <div class="max-w-7xl mx-auto px-6 md:px-16 border-t border-white/5 pt-8 text-center">
        <p class="font-body-md text-on-surface-variant text-sm">
            © 2026 zen+ TV. All rights reserved.
        </p>
    </div>
</footer>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = re.compile(r'<!--\s*Footer.*?</footer>', re.IGNORECASE | re.DOTALL)
    
    if pattern.search(content):
        new_content = pattern.sub(new_footer, content)
    else:
        pattern2 = re.compile(r'<footer.*?</footer>', re.IGNORECASE | re.DOTALL)
        new_content = pattern2.sub(new_footer, content)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f'Updated {file}')

// Growth Home Sprint - Prototype JavaScript

console.log('Growth Home Sprint prototype loaded');

// Dropdown Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const optionSelect = document.getElementById('option-select');
    const phaseSelect = document.getElementById('phase-select');

    // Option switching
    optionSelect.addEventListener('change', function() {
        const selectedOption = this.value;
        const homeViews = document.querySelectorAll('.home-view');

        homeViews.forEach(view => view.classList.remove('active'));
        document.getElementById(selectedOption).classList.add('active');

        console.log('Switched to:', selectedOption);
    });

    // Phase switching
    phaseSelect.addEventListener('change', function() {
        const selectedPhase = this.value;
        const phaseViews = document.querySelectorAll('.phase-view');

        phaseViews.forEach(view => view.classList.remove('active'));
        document.getElementById(selectedPhase).classList.add('active');

        console.log('Switched to:', selectedPhase);
    });

    // AI Mock Functionality
    const aiInput = document.getElementById('ai-input');
    const aiSendBtn = document.getElementById('ai-send');
    const aiResponse = document.getElementById('ai-response');
    const aiCloseBtn = document.getElementById('ai-close');
    const aiInputWrapper = document.querySelector('.ai-prompt-input-wrapper');

    // Mock Stripe test data responses
    const mockResponses = {
        balance: {
            keywords: ['balance', 'how much', 'funds', 'available'],
            response: `<p><strong>Your current balance:</strong></p>
                      <p>Available: <strong>$8,420.00</strong></p>
                      <p>This includes:</p>
                      <ul>
                        <li>$6,240 from completed payments</li>
                        <li>$2,180 from refunded disputes</li>
                      </ul>
                      <p>Next automatic payout scheduled for tomorrow at 9:00 AM.</p>`
        },
        payments: {
            keywords: ['payment', 'transaction', 'recent', 'last'],
            response: `<p><strong>Recent payments (Test Mode):</strong></p>
                      <ul>
                        <li><strong>$245.00</strong> - ch_3abc123 - Succeeded (2 hours ago)</li>
                        <li><strong>$89.50</strong> - ch_3abc124 - Succeeded (4 hours ago)</li>
                        <li><strong>$1,200.00</strong> - ch_3abc125 - Succeeded (6 hours ago)</li>
                        <li><strong>$456.75</strong> - ch_3abc126 - Succeeded (8 hours ago)</li>
                      </ul>
                      <p>Total volume in last 24 hours: <strong>$3,891.25</strong></p>`
        },
        customers: {
            keywords: ['customer', 'user', 'client'],
            response: `<p><strong>Customer overview (Test Mode):</strong></p>
                      <p>Total customers: <strong>847</strong></p>
                      <ul>
                        <li>342 active subscriptions</li>
                        <li>89 new customers this week</li>
                        <li>24 at-risk customers (payment failures)</li>
                      </ul>
                      <p>Top customer: Jane Smith - $12,450 lifetime value</p>`
        },
        volume: {
            keywords: ['volume', 'revenue', 'sales', 'gross'],
            response: `<p><strong>Net volume (Last 7 days):</strong></p>
                      <p><strong>$24,532.00</strong></p>
                      <ul>
                        <li>138 successful payments</li>
                        <li>$178 average transaction value</li>
                        <li>+12% compared to previous week</li>
                      </ul>
                      <p>Breakdown: 78% card payments, 22% ACH transfers</p>`
        },
        payouts: {
            keywords: ['payout', 'transfer', 'bank'],
            response: `<p><strong>Payout summary:</strong></p>
                      <p>Last payout: <strong>$12,840.00</strong> (Jan 26, 2026)</p>
                      <ul>
                        <li>Status: Paid (Arrived in bank account)</li>
                        <li>Bank: Chase ****1234</li>
                        <li>Next scheduled payout: $8,420 (Tomorrow)</li>
                      </ul>
                      <p>Total payouts this month: <strong>$84,325.00</strong></p>`
        },
        disputes: {
            keywords: ['dispute', 'chargeback', 'refund'],
            response: `<p><strong>Disputes & Chargebacks:</strong></p>
                      <p>Active disputes: <strong>2</strong></p>
                      <ul>
                        <li>$125.00 - Needs response (Due in 5 days)</li>
                        <li>$89.50 - Under review</li>
                      </ul>
                      <p>Won this month: 8 disputes ($2,340)</p>
                      <p>Lost this month: 1 dispute ($150)</p>`
        },
        create: {
            keywords: ['create', 'new', 'make', 'generate'],
            response: `<p><strong>What would you like to create?</strong></p>
                      <ul>
                        <li>Payment Link</li>
                        <li>Customer</li>
                        <li>Product</li>
                        <li>Subscription</li>
                        <li>Invoice</li>
                        <li>Refund</li>
                      </ul>
                      <p>Just let me know and I'll help you get started!</p>`
        },
        default: {
            response: `<p>I can help you with information about your Stripe test account, including:</p>
                      <ul>
                        <li>Balance and payouts</li>
                        <li>Recent payments and transactions</li>
                        <li>Customer information</li>
                        <li>Revenue and volume metrics</li>
                        <li>Disputes and chargebacks</li>
                        <li>Creating new resources</li>
                      </ul>
                      <p>What would you like to know?</p>`
        }
    };

    function getResponse(query) {
        const lowerQuery = query.toLowerCase();

        // Check each response type for matching keywords
        for (const [key, data] of Object.entries(mockResponses)) {
            if (data.keywords && data.keywords.some(keyword => lowerQuery.includes(keyword))) {
                return data.response;
            }
        }

        return mockResponses.default.response;
    }

    function displayResponse(responseHTML) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'ai-message';
        messageDiv.innerHTML = responseHTML;

        // Clear only messages, keep the close button
        const existingMessages = aiResponse.querySelectorAll('.ai-message');
        existingMessages.forEach(msg => msg.remove());

        aiResponse.appendChild(messageDiv);
        aiResponse.classList.add('active');
    }

    function handleSend() {
        const query = aiInput.value.trim();
        if (!query) return;

        // Simulate AI thinking delay
        setTimeout(() => {
            const response = getResponse(query);
            displayResponse(response);
        }, 500);

        // Clear input
        aiInput.value = '';
        // Remove has-text class from send button
        aiSendBtn.classList.remove('has-text');
    }

    // Send button click
    aiSendBtn.addEventListener('click', handleSend);

    // Enter key press
    aiInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    // Close button click
    aiCloseBtn.addEventListener('click', function() {
        const message = aiResponse.querySelector('.ai-message');
        if (message) {
            message.classList.add('closing');
            // Wait for animation to complete before hiding
            setTimeout(() => {
                aiResponse.classList.remove('active');
                message.classList.remove('closing');
            }, 300);
        } else {
            aiResponse.classList.remove('active');
        }
    });

    // Active state for AI input wrapper
    aiInput.addEventListener('focus', function() {
        console.log('AI input focused - adding active class');
        aiInputWrapper.classList.add('active');
    });

    aiInput.addEventListener('blur', function() {
        console.log('AI input blurred - removing active class');
        aiInputWrapper.classList.remove('active');
    });

    // Update send button style when user types
    aiInput.addEventListener('input', function() {
        if (this.value.trim().length > 0) {
            aiSendBtn.classList.add('has-text');
        } else {
            aiSendBtn.classList.remove('has-text');
        }
    });

    // Payments Upsell Click Handler
    const paymentsUpsell = document.getElementById('payments-upsell');
    const setupGuide = document.querySelector('.onboarding-card.setup-guide');
    const floatingGuide = document.getElementById('floating-guide');
    const aiPromptContainer = document.querySelector('.ai-prompt-container');

    if (paymentsUpsell) {
        paymentsUpsell.addEventListener('click', function() {
            console.log('Payments upsell clicked - transitioning to payments page');

            // Animate setup guide to bottom right corner
            if (setupGuide) {
                setupGuide.classList.add('animating');
            }

            // Wait for animation to complete, then switch pages
            setTimeout(() => {
                // Hide all home views
                const homeViews = document.querySelectorAll('.home-view');
                homeViews.forEach(view => view.classList.remove('active'));

                // Show payments page
                document.getElementById('payments-page').classList.add('active');

                // Hide the animating setup guide and show floating guide
                if (setupGuide) {
                    setupGuide.style.display = 'none';
                }
                floatingGuide.classList.add('visible');

                // Adjust AI prompt container width
                aiPromptContainer.classList.add('with-floating-guide');

                console.log('Transitioned to payments page');
            }, 800); // Match animation duration
        });
    }

    // Home Navigation Click Handler
    const homeNavBtn = document.getElementById('home-nav-btn');
    if (homeNavBtn) {
        homeNavBtn.addEventListener('click', function() {
            console.log('Home navigation clicked - returning to home page');

            // Hide floating guide
            floatingGuide.classList.remove('visible');

            // Reset AI prompt container width
            aiPromptContainer.classList.remove('with-floating-guide');

            // Hide all home views
            const homeViews = document.querySelectorAll('.home-view');
            homeViews.forEach(view => view.classList.remove('active'));

            // Show Option 1 home view (Phase 1)
            document.getElementById('option-1').classList.add('active');

            // Reset setup guide visibility and animation
            if (setupGuide) {
                setupGuide.style.display = '';
                setupGuide.classList.remove('animating');
            }

            console.log('Returned to home page');
        });
    }
});

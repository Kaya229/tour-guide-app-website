import { useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to add a 'visible' class
 * to child elements with reveal classes when they come into the viewport.
 */
export function useScrollReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const revealSelectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
        const targets = el.querySelectorAll(revealSelectors);

        // Also check if the container itself is a reveal element
        const allTargets: Element[] = [];
        if (el.matches(revealSelectors)) {
            allTargets.push(el);
        }
        targets.forEach((t) => allTargets.push(t));

        if (allTargets.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // animate only once
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        allTargets.forEach((target) => observer.observe(target));

        return () => {
            allTargets.forEach((target) => observer.unobserve(target));
        };
    }, []);

    return ref;
}

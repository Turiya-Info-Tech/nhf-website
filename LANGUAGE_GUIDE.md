# Hindi-English Language Toggle Implementation Guide

## Overview
The nhf-website now includes bilingual support (English & Hindi) with a language toggle in the header, similar to Ummeed.org.

## Features Implemented

### 1. **Language Context** (`src/lib/language.tsx`)
- Global language state management
- Translation dictionary with 40+ key translations
- Persistent language preference (localStorage)
- `useLanguage()` hook for components

### 2. **Language Toggle Component** (`src/components/ui/LanguageToggle.tsx`)
- Located in header (desktop and mobile)
- EN / हिन्दी toggle buttons
- Adaptive styling based on scroll state
- Smooth transitions

### 3. **App Integration** (`src/App.tsx`)
- LanguageProvider wraps entire app
- Available to all child components

### 4. **Header Integration** (`src/components/layout/Header.tsx`)
- Desktop: Toggle visible in right section with "Get Involved" button
- Mobile: Toggle in sheet menu above "Get Involved" button

## How to Use in Components

### Basic Usage
```tsx
import { useLanguage } from '@/lib/language';

const MyComponent = () => {
  const { language, t } = useLanguage();
  
  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>Current language: {language}</p>
    </div>
  );
};
```

### Switching Language Programmatically
```tsx
import { useLanguage } from '@/lib/language';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}>
      Switch to {language === 'en' ? 'Hindi' : 'English'}
    </button>
  );
};
```

## Translation Keys Structure
All translations are organized by section:
- `header.*` - Navigation items
- `hero.*` - Hero section content
- `about.*` - About section
- `impact.*` - Impact statistics section
- `contact.*` - Contact form labels

## Adding New Translations

Edit `src/lib/language.tsx` and add your keys to both `en` and `hi` objects:

```typescript
const translations: Record<Language, Record<string, string>> = {
  en: {
    'newSection.key': 'English text here',
    // ...
  },
  hi: {
    'newSection.key': 'Hindi text here',
    // ...
  },
};
```

Then use in components:
```tsx
const text = t('newSection.key');
```

## Storage
- Language preference saved to `localStorage` as `nhf-language`
- Persists across page refreshes
- Defaults to English if no preference set

## Current Translations Included
- Header navigation (6 items)
- Hero section (8 items)
- About section (6 items)
- Impact section (2 items)
- Contact section (5 items)

**Total: 40+ translation keys**

## Next Steps
1. Update section components to use `useLanguage()` and `t()` for dynamic text
2. Create Hindi translations for:
   - Programs/Work section
   - Team member names and bios
   - Impact card descriptions
   - Footer content
3. Test language switching across all pages
4. Consider right-to-left (RTL) styling for future Hindi support enhancements

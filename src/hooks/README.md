# Custom Hooks

## useClickOutside

A reusable hook that provides click-outside-to-close functionality for popup components.

### Usage

```tsx
import { useClickOutside } from '@/hooks/use-click-outside';

const MyPopup = ({ isOpen, onClose }) => {
  const popupRef = useClickOutside({ isOpen, onClose });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div ref={popupRef} className="bg-white p-6 rounded-lg">
        {/* Your popup content */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
```

### How it works

1. **Import the hook**: `import { useClickOutside } from '@/hooks/use-click-outside';`
2. **Use the hook**: `const popupRef = useClickOutside({ isOpen, onClose });`
3. **Attach the ref**: Add `ref={popupRef}` to your popup content container
4. **Done!**: Users can now click outside to close the popup

### Parameters

- `isOpen`: Boolean indicating if the popup is currently open
- `onClose`: Function to call when closing the popup

### Returns

- `ref`: A React ref that should be attached to your popup content container

### Benefits

- ✅ Consistent behavior across all popups
- ✅ Easy to implement in new components
- ✅ Properly handles event cleanup
- ✅ TypeScript support
- ✅ Reusable across the entire project


from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    use_in_migrations=True

    def create_user(self, email, password=None, **extraFields):

        if not email:
            raise ValueError('Email or Username is not provided.')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extraFields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password, **extraFields):
        extraFields.setdefault('is_staff', True)
        extraFields.setdefault('is_superuser', True)
        extraFields.setdefault('is_active', True)

        return self.create_user(email, password, **extraFields)
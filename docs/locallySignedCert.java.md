# `locallySignedCert` Submodule <a name="`locallySignedCert` Submodule" id="@cdktf/provider-tls.locallySignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocallySignedCert <a name="LocallySignedCert" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert tls_locally_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allowedUses(java.util.List<java.lang.String>)
    .caCertPem(java.lang.String)
    .caPrivateKeyPem(java.lang.String)
    .certRequestPem(java.lang.String)
    .validityPeriodHours(java.lang.Number)
//  .earlyRenewalHours(java.lang.Number)
//  .isCaCertificate(java.lang.Boolean)
//  .isCaCertificate(IResolvable)
//  .setSubjectKeyId(java.lang.Boolean)
//  .setSubjectKeyId(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caPrivateKeyPem">caPrivateKeyPem</a></code> | <code>java.lang.String</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.certRequestPem">certRequestPem</a></code> | <code>java.lang.String</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.allowedUses"></a>

- *Type:* java.util.List<java.lang.String>

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caCertPem"></a>

- *Type:* java.lang.String

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="caPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caPrivateKeyPem"></a>

- *Type:* java.lang.String

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.certRequestPem"></a>

- *Type:* java.lang.String

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.validityPeriodHours"></a>

- *Type:* java.lang.Number

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.earlyRenewalHours"></a>

- *Type:* java.lang.Number

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.isCaCertificate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.setSubjectKeyId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours">resetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate">resetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId">resetSetSubjectKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEarlyRenewalHours` <a name="resetEarlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours"></a>

```java
public void resetEarlyRenewalHours()
```

##### `resetIsCaCertificate` <a name="resetIsCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate"></a>

```java
public void resetIsCaCertificate()
```

##### `resetSetSubjectKeyId` <a name="resetSetSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId"></a>

```java
public void resetSetSubjectKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LocallySignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LocallySignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LocallySignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LocallySignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LocallySignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LocallySignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm">caKeyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem">certPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal">readyForRenewal</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime">validityEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime">validityStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput">allowedUsesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput">caCertPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput">caPrivateKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput">certRequestPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput">earlyRenewalHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput">isCaCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput">setSubjectKeyIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput">validityPeriodHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem">caPrivateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem">certRequestPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `caKeyAlgorithm`<sup>Required</sup> <a name="caKeyAlgorithm" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm"></a>

```java
public java.lang.String getCaKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `certPem`<sup>Required</sup> <a name="certPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem"></a>

```java
public java.lang.String getCertPem();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `readyForRenewal`<sup>Required</sup> <a name="readyForRenewal" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal"></a>

```java
public IResolvable getReadyForRenewal();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `validityEndTime`<sup>Required</sup> <a name="validityEndTime" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime"></a>

```java
public java.lang.String getValidityEndTime();
```

- *Type:* java.lang.String

---

##### `validityStartTime`<sup>Required</sup> <a name="validityStartTime" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime"></a>

```java
public java.lang.String getValidityStartTime();
```

- *Type:* java.lang.String

---

##### `allowedUsesInput`<sup>Optional</sup> <a name="allowedUsesInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedUsesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caCertPemInput`<sup>Optional</sup> <a name="caCertPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput"></a>

```java
public java.lang.String getCaCertPemInput();
```

- *Type:* java.lang.String

---

##### `caPrivateKeyPemInput`<sup>Optional</sup> <a name="caPrivateKeyPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput"></a>

```java
public java.lang.String getCaPrivateKeyPemInput();
```

- *Type:* java.lang.String

---

##### `certRequestPemInput`<sup>Optional</sup> <a name="certRequestPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput"></a>

```java
public java.lang.String getCertRequestPemInput();
```

- *Type:* java.lang.String

---

##### `earlyRenewalHoursInput`<sup>Optional</sup> <a name="earlyRenewalHoursInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput"></a>

```java
public java.lang.Number getEarlyRenewalHoursInput();
```

- *Type:* java.lang.Number

---

##### `isCaCertificateInput`<sup>Optional</sup> <a name="isCaCertificateInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput"></a>

```java
public java.lang.Object getIsCaCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `setSubjectKeyIdInput`<sup>Optional</sup> <a name="setSubjectKeyIdInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput"></a>

```java
public java.lang.Object getSetSubjectKeyIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validityPeriodHoursInput`<sup>Optional</sup> <a name="validityPeriodHoursInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput"></a>

```java
public java.lang.Number getValidityPeriodHoursInput();
```

- *Type:* java.lang.Number

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses"></a>

```java
public java.util.List<java.lang.String> getAllowedUses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem"></a>

```java
public java.lang.String getCaCertPem();
```

- *Type:* java.lang.String

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="caPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem"></a>

```java
public java.lang.String getCaPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem"></a>

```java
public java.lang.String getCertRequestPem();
```

- *Type:* java.lang.String

---

##### `earlyRenewalHours`<sup>Required</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours"></a>

```java
public java.lang.Number getEarlyRenewalHours();
```

- *Type:* java.lang.Number

---

##### `isCaCertificate`<sup>Required</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate"></a>

```java
public java.lang.Object getIsCaCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `setSubjectKeyId`<sup>Required</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId"></a>

```java
public java.lang.Object getSetSubjectKeyId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours"></a>

```java
public java.lang.Number getValidityPeriodHours();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LocallySignedCertConfig <a name="LocallySignedCertConfig" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.locally_signed_cert.LocallySignedCertConfig;

LocallySignedCertConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allowedUses(java.util.List<java.lang.String>)
    .caCertPem(java.lang.String)
    .caPrivateKeyPem(java.lang.String)
    .certRequestPem(java.lang.String)
    .validityPeriodHours(java.lang.Number)
//  .earlyRenewalHours(java.lang.Number)
//  .isCaCertificate(java.lang.Boolean)
//  .isCaCertificate(IResolvable)
//  .setSubjectKeyId(java.lang.Boolean)
//  .setSubjectKeyId(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem">caPrivateKeyPem</a></code> | <code>java.lang.String</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem">certRequestPem</a></code> | <code>java.lang.String</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses"></a>

```java
public java.util.List<java.lang.String> getAllowedUses();
```

- *Type:* java.util.List<java.lang.String>

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem"></a>

```java
public java.lang.String getCaCertPem();
```

- *Type:* java.lang.String

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="caPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem"></a>

```java
public java.lang.String getCaPrivateKeyPem();
```

- *Type:* java.lang.String

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem"></a>

```java
public java.lang.String getCertRequestPem();
```

- *Type:* java.lang.String

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours"></a>

```java
public java.lang.Number getValidityPeriodHours();
```

- *Type:* java.lang.Number

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours"></a>

```java
public java.lang.Number getEarlyRenewalHours();
```

- *Type:* java.lang.Number

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate"></a>

```java
public java.lang.Object getIsCaCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId"></a>

```java
public java.lang.Object getSetSubjectKeyId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---




# `tls_cert_request`

Refer to the Terraform Registory for docs: [`tls_cert_request`](https://www.terraform.io/docs/providers/tls/r/cert_request).

# `certRequest` Submodule <a name="`certRequest` Submodule" id="@cdktf/provider-tls.certRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertRequest <a name="CertRequest" id="@cdktf/provider-tls.certRequest.CertRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/r/cert_request tls_cert_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.cert_request.CertRequest;

CertRequest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .privateKeyPem(java.lang.String)
//  .dnsNames(java.util.List<java.lang.String>)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .subject(CertRequestSubject)
//  .uris(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.privateKeyPem"></a>

- *Type:* java.lang.String

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#private_key_pem CertRequest#private_key_pem}

---

##### `dnsNames`<sup>Optional</sup> <a name="dnsNames" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.dnsNames"></a>

- *Type:* java.util.List<java.lang.String>

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#dns_names CertRequest#dns_names}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.ipAddresses"></a>

- *Type:* java.util.List<java.lang.String>

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#ip_addresses CertRequest#ip_addresses}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.subject"></a>

- *Type:* <a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#subject CertRequest#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.uris"></a>

- *Type:* java.util.List<java.lang.String>

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#uris CertRequest#uris}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetDnsNames">resetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetUris">resetUris</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.certRequest.CertRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tls.certRequest.CertRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.certRequest.CertRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.certRequest.CertRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tls.certRequest.CertRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.certRequest.CertRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tls.certRequest.CertRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tls.certRequest.CertRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tls.certRequest.CertRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSubject` <a name="putSubject" id="@cdktf/provider-tls.certRequest.CertRequest.putSubject"></a>

```java
public void putSubject(CertRequestSubject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.certRequest.CertRequest.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>

---

##### `resetDnsNames` <a name="resetDnsNames" id="@cdktf/provider-tls.certRequest.CertRequest.resetDnsNames"></a>

```java
public void resetDnsNames()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-tls.certRequest.CertRequest.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-tls.certRequest.CertRequest.resetSubject"></a>

```java
public void resetSubject()
```

##### `resetUris` <a name="resetUris" id="@cdktf/provider-tls.certRequest.CertRequest.resetUris"></a>

```java
public void resetUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tls.certRequest.CertRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tls.cert_request.CertRequest;

CertRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.certRequest.CertRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tls.certRequest.CertRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tls.cert_request.CertRequest;

CertRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.certRequest.CertRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tls.certRequest.CertRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tls.cert_request.CertRequest;

CertRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.certRequest.CertRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.certRequestPem">certRequestPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference">CertRequestSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.dnsNamesInput">dnsNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.privateKeyPemInput">privateKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.subjectInput">subjectInput</a></code> | <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.urisInput">urisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.certRequest.CertRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tls.certRequest.CertRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.certRequest.CertRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tls.certRequest.CertRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tls.certRequest.CertRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tls.certRequest.CertRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tls.certRequest.CertRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.certRequest.CertRequest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.certRequest.CertRequest.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.certRequest.CertRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.certRequest.CertRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.certRequest.CertRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.certRequest.CertRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.certRequest.CertRequest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktf/provider-tls.certRequest.CertRequest.property.certRequestPem"></a>

```java
public java.lang.String getCertRequestPem();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.certRequest.CertRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-tls.certRequest.CertRequest.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-tls.certRequest.CertRequest.property.subject"></a>

```java
public CertRequestSubjectOutputReference getSubject();
```

- *Type:* <a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference">CertRequestSubjectOutputReference</a>

---

##### `dnsNamesInput`<sup>Optional</sup> <a name="dnsNamesInput" id="@cdktf/provider-tls.certRequest.CertRequest.property.dnsNamesInput"></a>

```java
public java.util.List<java.lang.String> getDnsNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-tls.certRequest.CertRequest.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="privateKeyPemInput" id="@cdktf/provider-tls.certRequest.CertRequest.property.privateKeyPemInput"></a>

```java
public java.lang.String getPrivateKeyPemInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-tls.certRequest.CertRequest.property.subjectInput"></a>

```java
public CertRequestSubject getSubjectInput();
```

- *Type:* <a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-tls.certRequest.CertRequest.property.urisInput"></a>

```java
public java.util.List<java.lang.String> getUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktf/provider-tls.certRequest.CertRequest.property.dnsNames"></a>

```java
public java.util.List<java.lang.String> getDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-tls.certRequest.CertRequest.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.certRequest.CertRequest.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-tls.certRequest.CertRequest.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.certRequest.CertRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertRequestConfig <a name="CertRequestConfig" id="@cdktf/provider-tls.certRequest.CertRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.certRequest.CertRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.cert_request.CertRequestConfig;

CertRequestConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .privateKeyPem(java.lang.String)
//  .dnsNames(java.util.List<java.lang.String>)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .subject(CertRequestSubject)
//  .uris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#private_key_pem CertRequest#private_key_pem}

---

##### `dnsNames`<sup>Optional</sup> <a name="dnsNames" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.dnsNames"></a>

```java
public java.util.List<java.lang.String> getDnsNames();
```

- *Type:* java.util.List<java.lang.String>

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#dns_names CertRequest#dns_names}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#ip_addresses CertRequest#ip_addresses}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.subject"></a>

```java
public CertRequestSubject getSubject();
```

- *Type:* <a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#subject CertRequest#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#uris CertRequest#uris}

---

### CertRequestSubject <a name="CertRequestSubject" id="@cdktf/provider-tls.certRequest.CertRequestSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.certRequest.CertRequestSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.cert_request.CertRequestSubject;

CertRequestSubject.builder()
//  .commonName(java.lang.String)
//  .country(java.lang.String)
//  .locality(java.lang.String)
//  .organization(java.lang.String)
//  .organizationalUnit(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .serialNumber(java.lang.String)
//  .streetAddress(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Distinguished name: `CN`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.country">country</a></code> | <code>java.lang.String</code> | Distinguished name: `C`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.locality">locality</a></code> | <code>java.lang.String</code> | Distinguished name: `L`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.organization">organization</a></code> | <code>java.lang.String</code> | Distinguished name: `O`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Distinguished name: `OU`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Distinguished name: `PC`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.province">province</a></code> | <code>java.lang.String</code> | Distinguished name: `ST`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | Distinguished name: `SERIALNUMBER`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.streetAddress">streetAddress</a></code> | <code>java.util.List<java.lang.String></code> | Distinguished name: `STREET`. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#common_name CertRequest#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#country CertRequest#country}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#locality CertRequest#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#organization CertRequest#organization}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#organizational_unit CertRequest#organizational_unit}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#postal_code CertRequest#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#province CertRequest#province}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#serial_number CertRequest#serial_number}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.streetAddress"></a>

```java
public java.util.List<java.lang.String> getStreetAddress();
```

- *Type:* java.util.List<java.lang.String>

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#street_address CertRequest#street_address}

---

## Classes <a name="Classes" id="Classes"></a>

### CertRequestSubjectOutputReference <a name="CertRequestSubjectOutputReference" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.cert_request.CertRequestSubjectOutputReference;

new CertRequestSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetSerialNumber"></a>

```java
public void resetSerialNumber()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.streetAddress">streetAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.serialNumberInput"></a>

```java
public java.lang.String getSerialNumberInput();
```

- *Type:* java.lang.String

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.streetAddressInput"></a>

```java
public java.util.List<java.lang.String> getStreetAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.streetAddress"></a>

```java
public java.util.List<java.lang.String> getStreetAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.internalValue"></a>

```java
public CertRequestSubject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>

---



